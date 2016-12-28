import React, { Component} from 'react';

     export default class Gear extends Component {


       render() {
      //  console.log(JSON.parse(this.props.datos.datos["Speed"]))

         return (
           <div className='gear' >{this.props.marcha}</div>

         );
       }
     }
 //{this.props.marcha}
