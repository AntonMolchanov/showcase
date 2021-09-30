import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';

import "./selsect.scss"
import Checkbox from '@mui/material/Checkbox';

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