import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import CalendarPopover from "./popover";


export default function CustomDateRangeInputs() {

  return (
    <div className="input-field">
      <TextField
        label="Amount address"
        type="text"
        variant="outlined"
        className="textarea"
        defaultValue="Choce Period"
        fullWidth
        InputProps={{
          readOnly: true,
          endAdornment: (
            <InputAdornment position="end">
              <CalendarPopover />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}