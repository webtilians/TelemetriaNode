import React, { Component} from 'react';

     export default class TrackTemp extends Component {


       render() {
      //  console.log(JSON.parse(this.props.datos.datos["Speed"]))

         return (
           <div>{this.props.tempTrac}</div>
         );
       }
     }
