import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

import socket from 'socket.io-client'
import DashBoard from './components/DashBoard'
let sock = socket('http://vps259018.ovh.net:2389');
const id='12xc1x23xzk'
let w = window.innerWidth;
let h = window.innerHeight;

class App extends Component {
  constructor(props){
  super(props);
  this.state={
    widthFL:w*0.10,
    heightFL:w*0.10,
    widthRH:w*0.10,
    heightRH:w*0.10,
    widthSpeed:w*0.35,
    heightSpeed:h*0.30,
    widthSesEnd:w*0.15,
    heightSesEnd:h*0.10,
    widthSesStart:w*0.15,
    heightSesStart:h*0.10,
    widthTrackTemp:w*0.15,
    heightTrackTemp:h*0.10,
    widthSW:w*0.15,
    heightSW:h*0.10,
    widthGear:w*0.10,
    heightGear:h*0.20,
    widthAirTemp:w*0.10,
    heightAirTemp:h*0.10,
    widthWinDir:w*0.10,
    heightWinDir:h*0.10,
    widthFL:w*0.10,
    heightFL:h*0.10,
    widthWT:w*0.10,
    heightWT:w*0.10,
    heightFUPH:h*0.10,
    widthFUPH:w*0.10,
    heightBrake:h*0.15,
    widthBrake:w*0.10,
    heightCluth:h*0.15,
    widthCluth:w*0.10,
    heigthAcel:h*0.15,
    widthAcel:w*0.10,
    datosDash:{}
  }
  }


  componentDidMount(){
    let that=this;
    sock.on('dashboardClient',function(data){
      console.log(data.Speed)
      that.setState({datosDash:data})
    })
    sock.emit('connectUser',{id:id})
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <DashBoard
          heightBrake={this.state.heightBrake}
          widthBrake={this.state.widthBrake}
          heightCluth={this.state.heightCluth}
          widthCluth={this.state.widthCluth}
          heigthAcel={this.state.heigthAcel}
          widthAcel={this.state.widthAcel}
          widthFUPH={this.state.widthFUPH}
          heightFUPH={this.state.heightFUPH}
          heightWT={this.state.heightWT}
          widthWT={this.state.widthWT}
          widthFL={this.state.widthFL}
          heightFL={this.state.heightFL}
          widthRH={this.state.widthRH}
          heightRH={this.state.heightRH}
          heightWinDir={this.state.heightWinDir}
          widthWinDir={this.state.widthWinDir}
          widthAirTemp={this.state.widthAirTemp}
          heightAirTemp={this.state.heightAirTemp}
          widthTrackTemp={this.state.widthTrackTemp}
          heightTrackTemp={this.state.heightTrackTemp}
          widthSesStart={this.state.widthSesStart}
          heightSesStart={this.state.heightSesStart}
          widthSesEnd={this.state.widthSesEnd}
          heightSesEnd={this.state.heightSesEnd}
          heightSpeed={this.state.heightSpeed}
           widthSpeed={this.state.widthSpeed}
           widthSW={this.state.widthSW}
           heightSW={this.state.heightSW}
           widthGear={this.state.widthGear}
           heightGear={this.state.heightGear}
            socket={sock}
             datos={this.state.datosDash}/>
      </div>
    );
  }
}

export default App;
