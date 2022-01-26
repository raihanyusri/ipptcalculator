import React from 'react';

export default class OverallPoints extends React.Component  {

    render() {
        return (
            <div style={{ marginLeft: '68px'}}>{this.props.pushUps + this.props.sitUps + this.props.running}</div>
        )
    }
}