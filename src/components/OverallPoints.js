import React from 'react';

export default class OverallPoints extends React.Component  {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div>Overall Points = {this.props.pushUps + this.props.sitUps + this.props.running} </div>
        )
    }
}