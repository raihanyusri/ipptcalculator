import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  root: {
    width: 300,
  },
  input: {
    width: 50,
  },
});

class SliderRunning extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.getSliderValue
    }
  }
  // const classes = useStyles();
  // const [value, setValue] = React.useState(30);

  // handleSliderChange = (event, newValue) => {
  //   this.setState(newValue);
  //   console.log(this.convertMS(newValue));
  // };

  // handleInputChange = (event) => {
  //   this.setState(event.target.value === '' ? '' : Number(event.target.value));
  // };

  handleBlur = () => {
    if (this.state.value < 600) {
      this.setState(600);
    } else if (this.state.value > 900) {
      this.setState(900);
    }
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
    const { classes } = this.props;
  return (
    <div className={classes.root}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={this.state.value}
            onChange={this.props.handleSliderChange}
            aria-labelledby="input-slider"
            defaultValue="700"
            track="flipped"
            step={10}
            min={510}
            max={1100}
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
              step: 10,
              min: 600,
              max: 900,
              type: 'number',
              'aria-labelledby': 'non-linear-slider',
            }}
          /> */}
        </Grid>
      </Grid>
    </div>
  );
          }
}

SliderRunning.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SliderRunning);
