import React, { Component} from 'react';

     export default class SteeringWheelAngle extends Component {


       render() {
      //  console.log(JSON.parse(this.props.datos.datos["Speed"]))

         return (
           <div>{this.props.steeringWheelAngle}</div>
         );
       }
     }
