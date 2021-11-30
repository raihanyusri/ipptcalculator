import React from 'react';

export default class OverallPoints extends React.Component  {
    constructor(props) {
      super(props);
      this.state = {
          pushUps: this.props.pushUps,
          sitUps: this.props.sitUps,
          running: this.props.running
      }
    }

    render() {
        return (
            <div>Overall Points = {this.props.pushUps + this.props.sitUps + this.props.running}</div>
        )
    }
}