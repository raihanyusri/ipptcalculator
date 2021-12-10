import './App.css';
import Dropdown from './components/Dropdown.js';
import PointsPushUps from './components/PointsPushUps.js';
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
      award: "PASS WITH INCENTIVE (+$200)"
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
      this.setState({ award: "GOLD (+$500)"})
    } else if (this.state.overallPoints >= 75) {
      this.setState({ award: "SILVER (+$300)"})
    } else if (this.state.overallPoints >= 61) {
      this.setState({ award: "PASS WITH INCENTIVE (+$200)"})
    } else if (this.state.overallPoints >= 51) {
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
    <div style={{ alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ padding: '50px', display: 'flex'}}>
        <Dropdown handleSelect={this.handleDropdownSelect} />
        <div style={{ padding: '25px', marginLeft: '260px'}}>Age Group: {this.state.selectedDropDownValue}</div>
      </div>
      <div style={{ marginLeft: '490px', marginBottom:'30px' }}>Points</div>
      <div style={{ paddingLeft: '50px', paddingBottom: '20px' }}>
        <Typography id="input-slider" gutterBottom style={{ fontWeight: 600, float: 'left', marginRight: '25px' }}>
          Push Ups
        </Typography>
        <PointsPushUps ddValue={this.state.selectedDropDownValue} parentCallback={this.handlePushUpsCallback}/>
      </div>
      <div style={{ paddingLeft: '50px', paddingBottom: '20px'  }}> 
        <Typography id="input-slider" gutterBottom style={{ fontWeight: 600, float: 'left', marginRight: '25px' }}>
          Sit Ups
        </Typography>
        <PointsSitUps ddValue={this.state.selectedDropDownValue} parentCallback={this.handleSitUpsCallback}/>
      </div>
      <div style={{ paddingLeft: '50px', paddingBottom: '20px'  }}> 
        <Typography id="input-slider" gutterBottom style ={{ fontWeight: 600, float: 'left', marginRight: '25px' }}> 
          2.4 Timing
        </Typography>
        <PointsRunning ddValue={this.state.selectedDropDownValue} parentCallback={this.handleRunningCallback} style={{ float: 'right' }}/>
      </div>
      <div style={{ paddingLeft: '50px', display: 'flex'}}>
        <div style={{ marginLeft: '300px'}}>Total Points</div>
        <OverallPoints 
          pushUps={this.state.pushUpsPoints} 
          sitUps={this.state.sitUpsPoints} 
          running={this.state.runningPoints}>
        </OverallPoints>
      </div>
      <div style={{ display:'flex'}}> 
        <div style={{ paddingLeft: '50px', marginLeft: '340px'}}>Award</div>
        <div style={{ marginLeft: '63px' }}>{this.state.award}</div>
      </div>
    </div>
  );

  }
}

export default App;
