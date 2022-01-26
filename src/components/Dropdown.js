import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default class Dropdown extends React.Component {
  state = {
    selectedDropDownValue: 1
  }

  render() {
  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="grouped-native-select">Age</InputLabel>
        <Select native defaultValue="" 
          id="grouped-native-select"
          onChange={this.props.handleSelect}>
          <optgroup label="Age Group 1">
            <option value={1}>18 years old</option>
            <option value={1}>19 years old</option>
            <option value={1}>20 years old</option>
            <option value={1}>21 years old</option>
          </optgroup>
          <optgroup label="Age Group 2">
            <option value={2}>22 years old</option>
            <option value={2}>23 years old</option>
            <option value={2}>24 years old</option>
          </optgroup>
          <optgroup label="Age Group 3">
            <option value={3}>25 years old</option>
            <option value={3}>26 years old</option>
            <option value={3}>27 years old</option>
          </optgroup>
          <optgroup label="Age Group 4">
            <option value={4}>28 years old</option>
            <option value={4}>29 years old</option>
            <option value={4}>30 years old</option>
          </optgroup>
          <optgroup label="Age Group 5">
            <option value={5}>31 years old</option>
            <option value={5}>32 years old</option>
            <option value={5}>33 years old</option>
          </optgroup>
          <optgroup label="Age Group 6">
            <option value={6}>34 years old</option>
            <option value={6}>35 years old</option>
            <option value={6}>36 years old</option>
          </optgroup>
          <optgroup label="Age Group 7">
            <option value={7}>37 years old</option>
            <option value={7}>38 years old</option>
            <option value={7}>39 years old</option>
          </optgroup>
          <optgroup label="Age Group 8">
            <option value={8}>40 years old</option>
            <option value={8}>41 years old</option>
            <option value={8}>42 years old</option>
          </optgroup>
          <optgroup label="Age Group 9">
            <option value={9}>43 years old</option>
            <option value={9}>44 years old</option>
            <option value={9}>45 years old</option>
          </optgroup>
          <optgroup label="Age Group 10">
            <option value={10}>46 years old</option>
            <option value={10}>47 years old</option>
            <option value={10}>48 years old</option>
          </optgroup>
          <optgroup label="Age Group 11">
            <option value={11}>49 years old</option>
            <option value={11}>50 years old</option>
            <option value={11}>51 years old</option>
          </optgroup>
          <optgroup label="Age Group 12">
            <option value={12}>52 years old</option>
            <option value={12}>53 years old</option>
            <option value={12}>54 years old</option>
          </optgroup>
          <optgroup label="Age Group 13">
            <option value={13}>55 years old</option>
            <option value={13}>56 years old</option>
            <option value={13}>57 years old</option>
          </optgroup>
          <optgroup label="Age Group 14">
            <option value={14}>58 years old</option>
            <option value={14}>59 years old</option>
            <option value={14}>60 years old</option>
          </optgroup>
        </Select>
      </FormControl>
    </div>
  );
  }
}