import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import Dropdown from './Dropdown';
import Pushups from '../data/Pushups';
import AgeGroup from './AgeGroup';

const styles = theme => ({
  root: {
    width: 300,
  },
  input: {
    width: 50,
  },
});

class SliderStatic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.getSliderValue
    }
  }

  // const [value, setValue] = useState(30);

  // handleSliderChange = (event, newValue) => {
  //   this.setState(newValue);
  // };

  // handleInputChange = (event) => {
  //   this.setState(event.target.value === '' ? '' : Number(event.target.value));
  // };

  handleBlur = () => {
    if (this.state.value < 0) {
      this.setState(0);
    } else if (this.state.value > 60) {
      this.setState(60);
    }
  };

  render() {
    const { classes } = this.props;
  return (
    <div className={classes.root}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={this.state.value}
            defaultValue="30"
            onChange={this.props.handleSliderChange}
            aria-labelledby="input-slider"
            max="60"
          />
        </Grid>
        <Grid item>
          {/* <Input
            className={classes.input}
            value={this.state.value}
            margin="dense"
            onChange={this.props.handleInputChange}
            onBlur={this.handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 60,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          /> */}
        </Grid>
      </Grid>
    </div>
  );
  }
}

SliderStatic.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SliderStatic);
