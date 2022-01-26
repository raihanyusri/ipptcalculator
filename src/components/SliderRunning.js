import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';

const styles = theme => ({
  root: {
    width: 400,
  },
  input: {
    width: 50,
  },
});

const theme = createMuiTheme({
  direction: 'rtl',
});

class SliderRunning extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.getSliderValue
    }
  }

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
          <ThemeProvider theme={theme}>
            <Slider
              value={this.state.value}
              onChange={this.props.handleSliderChange}
              aria-labelledby="input-slider"
              defaultValue="700"
              track="inverted"
              step={10}
              min={510}
              max={1100}
            />
          </ThemeProvider>
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
