import Drawer from '@mui/material/Drawer';
import backBtn from "../../assets/icons/vector.svg";
import closeIcon from "../../assets/icons/Close.svg";
import React from "react";
import styles from "../HeaderNew/Header.module.scss";
import {Progress} from "antd";
import customer from "../../assets/icons/customer.svg";
import arrowRight from "../../assets/icons/ArrowRight.svg"

import "./Drawer.scss"
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import {ReactComponent as CopyIcon} from "../../assets/icons/Copy.svg";

import listIcon1 from "../../assets/icons/listIcon-1.svg"
import listIcon2 from "../../assets/icons/listIcon-2.svg"
import listIcon3 from "../../assets/icons/listIcon-3.svg"
import listIcon4 from "../../assets/icons/listIcon-4.svg"
import listIcon5 from "../../assets/icons/listIcon-5.svg"

export default function DrawerMenu() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };

  return (
    <>
      <button className={styles.backBtn} onClick={toggleDrawer}>
        <img src={backBtn} alt="back"/>
      </button>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
      >
        <div className="drawer-wrapper">
          <div className="user-aria">
            <div className="user-pic">
              <Progress
                type="circle"
                strokeWidth={6}
                width={68}
                strokeColor={{
                  '15%': '#FF5655',
                  '45%': '#E3E3E7',
                }}
                percent={15}
                format={() => (
                  <img src={customer} alt=""/>
                )}
              />
              <div className="label label--7">
                7 lvl
              </div>
            </div>
            <div className="user-info">
              <div className="title">
                william
              </div>
              <div className="subtitle">
                William Lawson
              </div>
              <div className="label-wrapper">
                <div className="label label--id">
                  ID 001827231662
                </div>
              </div>

            </div>
            <button
              className="btn close-btn"
              onClick={toggleDrawer}
            >
              <img src={arrowRight} alt="arrow"/>
            </button>
          </div>
          <div className="input-field">
            <TextField
              label="Referral link for registration"
              type="text"
              variant="outlined"
              className="textarea"
              defaultValue="http://mzuckerberg.zendo.cloud/register"
              fullWidth
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <CopyIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="user-data">
            <div className="title">
              Statistics
            </div>

            <div className="list">
              <div className="list-item">
                <div className="list-icon">
                  <img src={listIcon1} alt="icon"/>
                </div>
                <div className="list-info">
                  <div className="title">
                    Personal volume
                  </div>
                  <div className="subtitle">
                    2 500 UMI
                  </div>
                </div>
              </div>
              <div className="list-item">
                <div className="list-icon">
                  <img src={listIcon2} alt="icon"/>
                </div>
                <div className="list-info">
                  <div className="title">
                    Group volume
                  </div>
                  <div className="subtitle">
                    8 500 UMI
                  </div>
                </div>
              </div>
            </div>
            <div className="list">
              <div className="list-item">
                <div className="list-icon">
                  <img src={listIcon3} alt="icon"/>
                </div>
                <div className="list-info">
                  <div className="title">
                    New users
                  </div>
                  <div className="subtitle">
                    10
                  </div>
                </div>
              </div>
              <div className="list-item">
                <div className="list-icon">
                  <img src={listIcon4} alt="icon"/>
                </div>
                <div className="list-info">
                  <div className="title">
                    Personally invited
                  </div>
                  <div className="subtitle">
                    25
                  </div>
                </div>
              </div>
              <div className="list-item">
                <div className="list-icon">
                  <img src={listIcon5} alt="icon"/>
                </div>
                <div className="list-info">
                  <div className="title">
                    Total in the structure
                  </div>
                  <div className="subtitle">
                    125
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="user-aria user-aria--support">
            <div className="title">
              Your sponsor
            </div>
            <div className="user-pic">
              <Progress
                type="circle"
                strokeWidth={6}
                width={68}
                strokeColor={{
                  '15%': '#FF5655',
                  '45%': '#E3E3E7',
                }}
                percent={15}
                format={() => (
                  <img src={customer} alt=""/>
                )}
              />
              <div className="label label--7">
                7 lvl
              </div>
            </div>
            <div className="user-info">
              <div className="title">
                maryjane
              </div>
              <div className="subtitle">
                Mary Jane
              </div>
              <div className="label-wrapper">
                <div className="label label--10">
                  7 lvl
                </div>
              </div>

            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}