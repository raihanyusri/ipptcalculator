import React, { useState, setState } from 'react';
import SliderRunning from './sliderrunning.js';

export default class PointsRunning extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      selectedDropDownValue: this.props.ddValue,
      selectedSliderValue: 700
    }
  }

    runningScore = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,4,6,8,10,12,14,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,35,36,36,37,37,38,38,39,39,40,40,41,42,43,44,46,48,49,50], //age grp 1
        [0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,4,6,8,10,12,14,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,35,36,36,37,37,38,38,39,39,40,40,41,42,43,44,46,48,49,50,50], //age grp 2
        [0,0,0,0,0,0,0,0,0,0,0,0,1,2,4,6,8,10,12,14,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,35,36,36,37,37,38,38,39,39,40,40,41,42,43,44,46,48,49,50,50,50], //age grp 3
        [0,0,0,0,0,0,0,0,0,0,0,1,2,4,6,8,10,12,14,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,35,36,36,37,37,38,38,39,39,40,41,42,43,44,45,46,48,49,50,50,50,50], //age grp 4
        [0,0,0,0,0,0,0,0,0,0,1,2,4,6,8,10,12,14,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,35,36,36,37,37,38,38,39,39,40,41,42,43,44,45,46,48,49,50,50,50,50,50], //age grp 5
        [0,0,0,0,0,0,0,0,0,1,2,4,6,8,10,12,14,16,18,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,35,36,36,37,37,38,38,39,39,40,40,41,42,43,44,45,46,48,49,50,50,50,50,50,50], //age grp 6
        [0,0,0,0,0,0,0,0,1,2,4,6,8,10,12,14,16,18,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,35,35,36,36,37,37,38,38,39,39,40,40,41,42,43,44,45,46,48,49,50,50,50,50,50,50,50], //age grp 7
        [0,0,0,0,0,0,0,1,2,4,6,8,10,12,14,16,18,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,35,35,36,36,37,37,38,38,39,39,40,40,41,42,43,44,45,46,48,49,50,50,50,50,50,50,50,50], //age grp 8
        [0,0,0,0,0,0,1,2,4,6,8,10,12,14,16,18,20,22,24,25,26,27,28,29,30,31,32,33,34,35,35,35,36,36,37,37,38,38,39,39,40,40,41,42,43,44,45,46,47,48,49,50,50,50,50,50,50,50,50,50], //age grp 9
        [0,0,0,0,0,1,2,4,6,8,10,12,14,16,18,20,22,24,25,26,27,28,29,30,31,32,33,34,35,35,35,36,36,37,37,38,38,39,39,40,40,41,42,43,44,45,46,47,48,49,50,50,50,50,50,50,50,50,50,50], //age grp 10
        [0,0,0,0,1,2,4,6,8,10,12,14,16,18,20,22,24,25,26,27,28,29,30,31,32,33,34,35,35,35,36,36,37,37,38,38,39,39,40,40,41,42,43,44,45,46,47,48,49,50,50,50,50,50,50,50,50,50,50,50], //age grp 11
        [0,0,0,1,2,4,6,8,10,12,14,16,18,20,22,24,25,26,27,28,29,30,31,32,33,34,35,35,35,36,36,37,37,38,38,39,39,40,40,41,42,43,44,45,46,47,48,49,50,50,50,50,50,50,50,50,50,50,50,50], //age grp 12
        [0,0,1,2,4,6,8,10,12,14,16,18,20,22,24,25,26,27,28,29,30,31,32,33,34,35,35,35,36,36,37,37,38,38,39,39,40,40,41,42,43,44,45,46,47,48,49,50,50,50,50,50,50,50,50,50,50,50,50,50], //age grp 13
        [0,1,2,4,6,8,10,12,14,16,18,20,22,24,25,26,27,28,29,30,31,32,33,34,35,35,35,36,36,37,37,38,38,39,39,40,40,41,42,43,44,45,46,47,48,49,50,50,50,50,50,50,50,50,50,50,50,50,50,50], //age grp 14

      ];

    getSliderValue() {
      return this.state.selectedSliderValue;
    }

    handleSliderChange = (event, newValue) => {
      this.setState({ selectedSliderValue: newValue });
    };
    
    handleInputChange = (event) => {
        this.setState(event.target.value === '' ? '' : { selectedSliderValue: Number(event.target.value) });
    };

    convertMS(value) {
        const sec = parseInt(value, 10); 
        let minutes = Math.floor(sec / 60); // get minutes
        let seconds = sec - (minutes * 60); // get seconds
        // add 0 if value < 10; Example: 2 => 02
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        return minutes+':'+seconds; 
    }
  
    render() {
    return (
        <div>
            <SliderRunning handleSliderChange={this.handleSliderChange} handleInputChange={this.handleInputChange} />
            {/* <div>Age grp: {this.props.ddValue}</div>  */}
            <div>Time: {this.convertMS(this.state.selectedSliderValue)} </div>
            <div>Points: {this.runningScore[typeof this.props.ddValue === "undefined" ? 0 : parseInt(this.props.ddValue)][Math.abs(59-(this.state.selectedSliderValue-510)/10)]}</div>
        </div>
    )
    }
}