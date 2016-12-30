import React, { Component} from 'react';

     export default class Speed extends Component {

       render() {


         return (
           <div className='velocidad' >{this.props.velocidad}<a style={{color:"black",fontSize:10}}>KM/H</a></div>
         );
       }
     }
//{this.props.velocidad}
