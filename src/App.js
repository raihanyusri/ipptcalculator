import './App.css';
import SliderRunning from './components/sliderrunning.js';
import Dropdown from './components/Dropdown.js';
import Points from './components/Points.js';
import PointsSitUps from './components/PointsSitUps.js';
import PointsRunning from './components/PointsRunning.js'
import OverallPoints from './components/OverallPoints.js'
import Typography from '@material-ui/core/Typography';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDropDownValue: 1,
      pushUpsPoints: 16,
      sitUpsPoints: 16,
      runningPoints: 35,
      overallPoints: 67,
      award: "PASS"
    }
    this.handlePushUpsCallback = this.handlePushUpsCallback.bind(this)
    this.handleSitUpsCallback = this.handleSitUpsCallback.bind(this)
    this.handleRunningCallback = this.handleRunningCallback.bind(this)
  }

  handleDropdownSelect = (e) => {
    this.setState({ selectedDropDownValue: e.target.value });
  };

  handlePushUpsCallback = (pushUpData) => {
    this.setState({ pushUpsPoints: pushUpData })
    this.addPoints()
    this.handleAward()
  }

  handleSitUpsCallback = (sitUpData) => {
    this.setState({ sitUpsPoints: sitUpData })
    this.addPoints()
    this.handleAward()
  }

  handleRunningCallback = (runningData) => {
    this.setState({ runningPoints: runningData })
    this.addPoints()
    this.handleAward()
  }

  handleAward() {
    if (this.state.overallPoints >= 85) {
      this.setState({ award: "GOLD"})
    } else if (this.state.overallPoints >= 75) {
      this.setState({ award: "SILVER"})
    } else if (this.state.overallPoints >= 61) {
      this.setState({ award: "PASS"})
    } else {
      this.setState({ award: "FAIL"})
    }
  }

  addPoints() {
    this.setState({ overallPoints: (parseInt(this.state.pushUpsPoints) + parseInt(this.state.sitUpsPoints) + parseInt(this.state.runningPoints)) })
  }
  
  render() {
  return (
    <div>
      <Dropdown handleSelect={this.handleDropdownSelect} />
      <div style={{ padding: '20px' }}>
        <Typography id="input-slider" gutterBottom style={{ fontWeight: 600, float: 'left' }}>
          Push Ups
        </Typography>
        <Points ddValue={this.state.selectedDropDownValue} parentCallback={this.handlePushUpsCallback} style={{ float: 'right' }} />
      </div>
      <div style={{ padding: '20px' }}> 
        <Typography id="input-slider" gutterBottom style ={{ fontWeight: 600 }}>
          Sit Ups
        </Typography>
        <PointsSitUps ddValue={this.state.selectedDropDownValue} parentCallback={this.handleSitUpsCallback} style={{ float: 'right' }}/>
      </div>
      <div style={{ padding: '20px' }}> 
        <Typography id="input-slider" gutterBottom style ={{ fontWeight: 600 }}> 
          2.4 Timing
        </Typography>
        <PointsRunning ddValue={this.state.selectedDropDownValue} parentCallback={this.handleRunningCallback} style={{ float: 'right' }}/>
      </div>
      <OverallPoints pushUps={this.state.pushUpsPoints} sitUps={this.state.sitUpsPoints} running={this.state.runningPoints}></OverallPoints>
      <div>Award: {this.state.award}</div>
    </div>
  );

  }
}

export default App;
