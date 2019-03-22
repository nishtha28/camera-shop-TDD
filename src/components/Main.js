import React, { Component } from 'react';
import CameraItem from './CameraItem';

class Main extends Component {
   constructor(props){
     super(props)
     this.state = {
       cameraList : this.props.cameraList
     }
   }
  render () {
    return (
      <div>
        <ul>
          <li><CameraItem/></li>
        </ul>
      </div>
    )
  }
}

export default Main;
