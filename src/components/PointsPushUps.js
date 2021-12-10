import React from 'react';
import Slider from './Slider.js';

export default class PointsPushUps extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      selectedDropDownValue: this.props.ddValue,
      selectedSliderValue: 30
    }
  }

    puscore = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,4,6,8,9,10,11,12,13,14,15,15,16,16,16,17,17,17,18,18,18,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25], //age grp 1
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,4,6,8,9,10,11,12,13,14,15,15,16,16,16,17,17,17,18,18,18,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25], //age grp 2
        [0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,4,6,8,9,10,11,12,13,14,15,15,16,16,16,17,17,17,18,18,18,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25], //age grp 3
        [0,0,0,0,0,0,0,0,0,0,0,0,1,2,4,6,8,9,10,11,12,13,14,15,15,16,16,16,17,17,17,18,18,18,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25], //age grp 4
        [0,0,0,0,0,0,0,0,0,0,0,1,2,4,6,8,9,10,11,12,13,14,15,15,16,16,16,17,17,17,18,18,18,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,25], //age grp 5
        [0,0,0,0,0,0,0,0,0,0,1,2,4,6,8,9,10,11,12,13,14,15,15,16,16,16,17,17,17,18,18,18,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,25,25], //age grp 6
        [0,0,0,0,0,0,0,0,0,1,2,4,6,8,9,10,11,12,13,14,15,15,16,16,16,17,17,17,18,18,18,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,25,25,25], //age grp 7
        [0,0,0,0,0,0,0,0,1,2,4,6,8,9,10,11,12,13,14,15,15,16,16,16,17,17,17,18,18,18,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,25,25,25,25], //age grp 8
        [0,0,0,0,0,0,0,1,2,4,6,8,9,10,11,12,13,14,15,15,16,16,16,17,17,17,18,18,18,19,19,19,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,25,25,25,25,25,25], //age grp 9
        [0,0,0,0,0,0,1,2,4,6,8,9,10,11,12,13,14,15,15,16,16,16,17,17,17,18,18,18,19,19,19,20,20,20,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25], //age grp 10
        [0,0,0,0,0,1,2,4,6,8,9,10,11,12,13,14,15,15,16,16,16,17,17,17,18,18,18,19,19,19,20,20,20,21,21,21,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25], //age grp 11
        [0,0,0,0,1,2,4,6,8,9,10,11,12,13,14,15,15,16,16,16,17,17,17,18,18,18,19,19,19,20,20,20,21,21,21,22,22,22,23,23,23,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25], //age grp 12
        [0,0,0,1,2,4,6,8,9,10,11,12,13,14,15,15,16,16,16,17,17,17,18,18,18,19,19,19,20,20,21,21,21,22,22,22,23,23,23,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25], //age grp 13
        [0,0,1,2,4,6,8,9,10,11,12,13,14,15,15,16,16,16,17,17,17,18,18,18,19,19,19,20,20,21,21,21,22,22,22,23,23,23,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25], //age grp 14
      ];

    getSliderValue() {
      return this.state.selectedSliderValue;
    }

    handleSliderChange = (event, newValue) => {
      this.setState({ selectedSliderValue: newValue });
      this.props.parentCallback(this.puscore[typeof this.props.ddValue === "undefined" ? 0 : parseInt(this.props.ddValue-1)][this.state.selectedSliderValue]);
    };
    
    handleInputChange = (event) => {
        this.setState(event.target.value === '' ? '' : { selectedSliderValue: Number(event.target.value) });
    };
  
    render() {
    return (
        <div>
            <div style={{ display: 'flex'}}>
              <div style={{ marginLeft:'220px' }}>Reps: {this.state.selectedSliderValue}</div>
              <div style={{ marginLeft:'70px', marginTop:'20px'}}>{this.puscore[typeof this.props.ddValue === "undefined" ? 0 : parseInt(this.props.ddValue-1)][this.state.selectedSliderValue]} </div>
            </div>
              <Slider handleSliderChange={this.handleSliderChange} handleInputChange={this.handleInputChange} />
        </div>
    )
    }
}