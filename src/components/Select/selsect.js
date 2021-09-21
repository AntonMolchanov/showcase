import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';

import "./selsect.scss"
import {Checkbox} from "@material-ui/core";

const names = [
  'All',
  '2',
  '3',
  '4',
];

export default function CustomSelect() {
  const [state, setState] = React.useState("All");

  const handleChange = (event) => {
    setState(event.target.value);
  };


  return (
    <FormControl
      fullWidth
      className="custom-select"
    >
      <InputLabel shrink>Filter</InputLabel>
      <Select
        value={state}
        onChange={handleChange}
        renderValue={(selected) => selected}
        defaultValue="All"
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left"
          },
          getContentAnchorEl: null,
          classes: { paper: "custom-select__dropdown" }
        }}
      >
        {names.map((name) => {
          return (
            <MenuItem key={name} value={name}>
              <Checkbox checked={state.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          )}
        )}
      </Select>
    </FormControl>
  );
}