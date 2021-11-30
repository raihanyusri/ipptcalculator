import './App.css';
import SliderRunning from './components/sliderrunning.js';
import Dropdown from './components/Dropdown.js';
import Points from './components/Points.js';
import PointsRunning from './components/PointsRunning.js'
import OverallPoints from './components/OverallPoints.js'
import Typography from '@material-ui/core/Typography';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDropDownValue: 0,
      pushUpsPoints: 0,
      sitUpsPoints: 0
    }
  }

  handleDropdownSelect = (e) => {
    this.setState({ selectedDropDownValue: e.target.value });
  };
  
  render() {
  return (
    <div>
      <Dropdown handleSelect={this.handleDropdownSelect} />
      <div style={{ padding: '20px' }}>
        <Typography id="input-slider" gutterBottom style={{ fontWeight: 600, float: 'left' }}>
          Push Ups
        </Typography>
        <Points ddValue={this.state.selectedDropDownValue} style={{ float: 'right' }} />
      </div>
      <div style={{ padding: '20px' }}> 
        <Typography id="input-slider" gutterBottom style ={{ fontWeight: 600 }}>
          Sit Ups
        </Typography>
        <Points ddValue={this.state.selectedDropDownValue} />
      </div>
      <div style={{ padding: '20px' }}> 
        <Typography id="input-slider" gutterBottom style ={{ fontWeight: 600 }}> 
          2.4 Timing
        </Typography>
        <PointsRunning ddValue={this.state.selectedDropDownValue} />
      </div>
      <OverallPoints />
    </div>
  );
  }
}

export default App;
