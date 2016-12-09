var RTCPeerConnection = /*window.RTCPeerConnection ||*/ window.webkitRTCPeerConnection || window.mozRTCPeerConnection;

if (RTCPeerConnection)(function() {
    var rtc = new RTCPeerConnection({
        iceServers: []
    });
    if (1 || window.mozRTCPeerConnection) { // FF [and now Chrome!] needs a channel/stream to proceed
        rtc.createDataChannel('', {
            reliable: false
        });
    };

    rtc.onicecandidate = function(evt) {
        // convert the candidate to SDP so we can run it through our general parser
        // see https://twitter.com/lancestout/status/525796175425720320 for details
        if (evt.candidate) grepSDP("a=" + evt.candidate.candidate);
    };
    rtc.createOffer(function(offerDesc) {
        grepSDP(offerDesc.sdp);
        rtc.setLocalDescription(offerDesc);
    }, function(e) {
        console.warn("offer failed", e);
    });


    var addrs = Object.create(null);
    addrs["0.0.0.0"] = false;

    function updateDisplay(newAddr) {
        if (newAddr in addrs) return;
        else addrs[newAddr] = true;
        var displayAddrs = Object.keys(addrs).filter(function(k) {
            return addrs[k];
        });

        displayAddrs.forEach(function(ip) {
            findServerInLan(ip)
        })
    }

    function grepSDP(sdp) {
        var hosts = [];
        sdp.split('\r\n').forEach(function(line) { // c.f. http://tools.ietf.org/html/rfc4566#page-39
            if (~line.indexOf("a=candidate")) { // http://tools.ietf.org/html/rfc4566#section-5.13
                var parts = line.split(' '), // http://tools.ietf.org/html/rfc5245#section-15.1
                    addr = parts[4],
                    type = parts[7];
                if (type === 'host') updateDisplay(addr);
            } else if (~line.indexOf("c=")) { // http://tools.ietf.org/html/rfc4566#section-5.7
                var parts = line.split(' '),
                    addr = parts[2];
                updateDisplay(addr);
            }
        });
    }
})();
else {
    console.log('WebRTC not available, IP detection disabled, falling back to standard networks (192.168.0.0/24, 192.168.1.0/24)');
    findServerInLan('192.168.1.1');
    findServerInLan('192.168.0.1');
}


function findServerInLan(ip) {
    var ip = ip || '192.168.0.1';
    if (ip.split('.').length != 4) {
        console.log('IPv6 not supported.');
        return false;
    }
    console.log('Searching network ' + ip + '/24 for a valid server.');
    var aip = ip.split('.');
    aip.pop();
    ip = aip.join('.');
    var tail = Array.apply(null, {
        length: 255
    }).map(Number.call, Number);
    tail.forEach(function(t) {
        var socket = io('http://' + ip + '.' + t + ':2389')
        setTimeout(function() {
            if (socket.connected)
                serverFound(ip + '.' + t, socket)
            else
                socket.close()
        }, 1500);
    });
}


function serverFound(ip, socket) {
    console.log('server found!! ', ip);
    socket.emit('hello');
}
