import React, { Component} from 'react';

     export default class RelativeHumidity extends Component {


       render() {
      //  console.log(JSON.parse(this.props.datos.datos["Speed"]))

         return (
           <div>{this.props.relativeHumidity}</div>
         );
       }
     }
