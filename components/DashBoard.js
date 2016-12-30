import React, { Component} from 'react';
import Speed from './dashboard/Speed'
import Gear from './dashboard/Gear'
import SessionTime from './dashboard/SessionTime'
import SessionTimeRemain from './dashboard/SessionTimeRemain'
import SteeringWheelAngle from './dashboard/SteeringWheelAngle'
import TrackTemp from './dashboard/TrackTemp'
import AirTemp from './dashboard/AirTemp'
import WindDir from './dashboard/WindDir'
import RelativeHumidity from './dashboard/RelativeHumidity'
import PitRepairLeft from './dashboard/PitRepairLeft'
import PitOptRepairLeft from './dashboard/PitOptRepairLeft'
import FuelLevel from './dashboard/FuelLevel'
import WaterTemp from './dashboard/WaterTemp'
import FuelUsePerHour from './dashboard/FuelUsePerHour'
import Brake from './dashboard/Brake'
import Cluth from './dashboard/Cluth'
import Acel from './dashboard/Acel'
import '../css/dashboard.css'
var dragged;
var placeholder = document.createElement("div");
placeholder.className = "placeholder";
     export default class DashBoard extends Component {
       constructor(props) {
         super(props);
         this.state={

         }


       }
       componentDidMount(){

       }

       render() {
      //  console.log(JSON.parse(this.props.datos.datos["Speed"]))

         return (
           <div className='fondo'>
           <div
             className='wrap wrapSesStart'
             style={{width:this.props.widthSesStart,height:this.props.heightSesStart}}>
             Seconds since session start
           <SessionTime sessionTime={this.props.datos.SessionTime}/>
           </div>
           <div
             className="wrap wrapSessionEnd"
              style={{width:this.props.widthSesEnd,height:this.props.heightSesEnd}}>
                <a style={{color:"black",fontSize:10}}>Seconds left till session ends</a>
            <SessionTimeRemain sessionTimeRemainin={this.props.datos.SessionTimeRemain}/>
            </div>
           <div
            key={"speed1"}
             ref='divVel'
              className="wrap fondoVelocidad"
               style={{width:this.props.widthSpeed,height:this.props.heightSpeed}}>
           <Speed velocidad={this.props.datos.Speed}/>
           </div>
           <div
             className="wrap wrapSterW"
             style={{width:this.props.widthSW,height:this.props.heightSW}}>
             <a style={{color:"black",fontSize:10}}>SteeringWhellAngle</a>
           <SteeringWheelAngle steeringWheelAngle={this.props.datos.SteeringWheelAngle} />
           </div>
           <div
             className='wrap wrapGear'
             style={{width:this.props.widthGear,height:this.props.heightGear}}>
             <a style={{color:"black",fontSize:10}}>GEAR</a>
         <Gear  marcha={this.props.datos.Gear}/>
         </div>
         <div
           className='wrap wrapTrackTemp'
           style={{width:this.props.widthTrackTemp,height:this.props.heightTrackTemp}}>
           <a style={{color:"black",fontSize:10}}>TrackTemp</a>
           <TrackTemp tempTrac={this.props.datos.TrackTemp}/>
           </div>
           <div
             className='wrap wrapAirTemp'
             style={{width:this.props.widthAirTemp,height:this.props.heightAirTemp}}>
             <a style={{color:"black",fontSize:10}}>AirTemp</a>
           <AirTemp airTemp={this.props.datos.AirTemp}/>
           </div>
           <div
             style={{width:this.props.widthWinDir,height:this.props.heightWinDir}}
             className='wrap wrapWinDir'>
             <a style={{color:"black",fontSize:10}}>winDir</a>
           <WindDir winDir={this.props.datos.WindDir}/>
           </div>
           <div
             className='wrap wrapRH'
             style={{width:this.props.widthRH,height:this.props.heightRH}}>
             <a style={{color:"black",fontSize:10}}>RH</a>
           <RelativeHumidity relativeHumidity={this.props.datos.RelativeHumidity}/>
           </div>
           <div
             className='wrap wrapFL'
             style={{width:this.props.widthFL,height:this.props.heightFL}}>
             <a style={{color:"black",fontSize:10}}>FuelLevel</a>
           <FuelLevel fuelLevel={this.props.datos.FuelLevel}/>
           </div>
           <div
             className='wrap wrapWT'
             style={{width:this.props.widthWT,height:this.props.heightWT}}>
             <a style={{color:"black",fontSize:10}}>waterTemp</a>
           <WaterTemp waterTemp={this.props.datos.WaterTemp}/>
           </div>
           <div className='wrap wrapFusePH'
             style={{width:this.props.widthFUPH,height:this.props.heightFUPH}}>
             <a style={{color:"black",fontSize:10}}>fuelUseXHour</a>
           <FuelUsePerHour fuelUse={this.props.datos.FuelUsePerHour}/>
           </div>
           <div className='wrap wrapCluth'
             style={{width:this.props.widthCluth,height:this.props.heightCluth}}>
             <a style={{color:"black",fontSize:10}}>CLuth</a>
           <Cluth fuelUse={this.props.datos.FuelUsePerHour}/>
           </div>
           <div className='wrap wrapBrake'
             style={{width:this.props.widthBrake,height:this.props.heightBrake}}>
             <a style={{color:"black",fontSize:10}}>Brake</a>
           <Brake fuelUse={this.props.datos.FuelUsePerHour}/>
           </div>
           <div className='wrap wrapAcel'
             style={{width:this.props.widthAcel,height:this.props.heightAcel}}>
             <a style={{color:"black",fontSize:10}}>Acel</a>
           <Acel fuelUse={this.props.datos.FuelUsePerHour}/>
           </div>
           </div>
         );
       }
     }
