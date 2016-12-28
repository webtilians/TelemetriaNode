import React, { Component} from 'react';

     export default class WindDir extends Component {


       render() {
      //  console.log(JSON.parse(this.props.datos.datos["Speed"]))

         return (
           <div>{this.props.winDir}</div>
         );
       }
     }
