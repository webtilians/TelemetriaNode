import React, { Component} from 'react';

        
        import '../css/telemetry.css'
        import GoogleMap from 'google-map-react';
       import {Line} from 'react-chartjs'
        export default class Telemetry extends Component {
        static defaultProps = {
    center: {lat: 59.938043, lng: 30.337157},
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };        
        
    constructor(props) {
        super(props);
        let lat=this.props.datosSesion.data.WeekendInfo.TrackLatitude.split(" ");
        let lon=this.props.datosSesion.data.WeekendInfo.TrackLongitude.split(' ');
        console.log(lat)
        this.state = {
            center: {lat: parseFloat(lat[0]), lng: parseFloat(lon[0])},
            zoom: 8,
            greatPlaceCoords: {lat: 59.724465, lng: 30.080121},
            dataLine:this.props.datosLine,
            
        }


    }
    componentDidMount() {

    }
     
    render() {
        return (
                <div className='fondoTelemetria'>
                    <button onClick={() => this.props.cambiarView('dashboard')}>dashboard</button>
                    <div style={{display:"flex",width:200,height:200}}>
                            <GoogleMap
                                layerTypes={['TrafficLayer']}
                                defaultCenter={this.state.center}
                                defaultZoom={this.state.zoom}>
                              </GoogleMap>
                              
                            
                              </div>
                                <div className="infoSesion">
                              
     
                              <a>{this.props.datosSesion.data.WeekendInfo.TrackDisplayName}</a>
                                      <a>{this.props.datosSesion.data.WeekendInfo.TrackCity}</a>
                                              <a>{this.props.datosSesion.data.WeekendInfo.TrackCountry}</a>
                                                      <a>{this.props.datosSesion.data.WeekendInfo.TrackLength}</a>
                                                             
                        </div>
                        <div>
                        <Line data={this.state.dataLine}/>
                        </div>
                              
                </div>
                );
        
    }
}
