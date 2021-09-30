import React from "react"
import Popover from '@mui/material/Popover';
import Calendar from "../../assets/icons/Calendar.svg";
import ArrowRight from "../../assets/icons/ArrowRight.svg";
import StaticDateRangePickerDemo from "./Calendar";

export default function CalendarPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'CalendarPopover' : undefined;

  return (
    <>
      <img src={Calendar} alt="calendar" aria-describedby={id}  onClick={handleClick} className="calendar-icon"/>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        classes={{ paper: "calendar-popover" }}
      >
        <div className="calendar-wrapper">
          <div className="title">
            Start date <img src={ArrowRight} alt="icon"/> End date
          </div>
          <StaticDateRangePickerDemo />
        </div>

      </Popover>
    </>
  );
}