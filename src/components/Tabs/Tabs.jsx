import './Tabs.scss'
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomSelect from "../Select/selsect";
import downSmallIcon from '../../assets/icons/downSmall.svg'
import savingIcon from '../../assets/icons/Saving.svg'
import {Doughnut, Line} from 'react-chartjs-2';
import {Progress} from "antd";
import customer from "../../assets/icons/customer.svg";
import PaginationRounded from "../Pagination/Pagination";
import {ReactComponent as Currency1} from "../../assets/icons/upIcon.svg";
import {ReactComponent as Currency2} from "../../assets/icons/downIcon.svg";
import {ReactComponent as Currency3} from "../../assets/icons/userIcon.svg";
import {ReactComponent as Currency4} from "../../assets/icons/usersIcon.svg";
import {TextField} from "@mui/material";
import {ReactComponent as Warning} from "../../assets/icons/Warning.svg";
import {ReactComponent as ProgressIcon} from "../../assets/icons/progress.svg";
import {ReactComponent as BlockIcon} from "../../assets/icons/block.svg";
import {ReactComponent as Lvl2} from "../../assets/icons/lvl2.svg";
import {ReactComponent as DoubleArrow} from "../../assets/icons/Double-Right.svg";
import {ReactComponent as Lvl3} from "../../assets/icons/lvl3.svg";
import CustomDateRangeInputs from "../Calendar/Input";


const data = {
  labels: ['Jun \'20', 'Jun \'20', 'Jun \'20', 'Jun \'20', 'Jun \'20', 'Jun \'20'],
  datasets: [
    {
      label: '1',
      data: [123, 250, 100, 424, 200, 850],
      fill: false,
      borderColor: '#7B61FF',
      radius: 0,
    },
    {
      label: '2',
      data: [100, 200, 300, 200, 500, 600],
      fill: false,
      borderColor: '#A6D4FF',
      radius: 0,
    },
  ],
};

const options = {
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      ticks: {
        min: 0,
        max: 1000,
        stepSize: 250,
      }
    },
  },
  plugins: {
    legend: {
      display: false
    }
  },
  responsive: true,
};

const data2 = {
  datasets: [
    {
      label: '# of Votes',
      data: [17, 83, ],
      backgroundColor: [
        '#E3E3E7',
        '#38D47E',
      ],
      borderWidth: 0,
      rotation: 300,
      cutout: 55
    },
  ],
};

const data3 = {
  datasets: [
    {
      label: '# of Votes',
      data: [17, 83, ],
      backgroundColor: [
        '#E3E3E7',
        '#7B61FF',
      ],
      borderWidth: 0,
      rotation: 300,
      cutout: 55
    },
  ],
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function TabPanelMenu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          <Tab label="Bonus report" {...a11yProps(0)} />
          <Tab label="UMI reports" {...a11yProps(1)} />
          <Tab label="Status reports" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <form className="form">
          <div className="form-item form-item--period">
            <CustomDateRangeInputs />
          </div>
          <div className="form-item">
            <button className="btn" type="button">submit</button>
          </div>
        </form>
        <div className="container">
          <div className="col">
            <div className="accrued-statistics">
              <div className="title">
                Accrued bonuses statistics
              </div>
              <div className="accrued-statistics-total">
                <div className="title">
                  Total bonuses earned
                </div>
                <div className="subtitle">
                  1 250 UMI
                </div>
              </div>
              <div className="table-wrapper">
                <div className="table">
                  <div className="table-row">
                    <div className="table-item">
                      № <img src={downSmallIcon} alt="icon"/>
                    </div>
                    <div className="table-item">
                      Bonus name <img src={downSmallIcon} alt="icon"/>
                    </div>
                    <div className="table-item">
                      Amount <img src={downSmallIcon} alt="icon"/>
                    </div>
                  </div>

                  <div className="table-row">
                    <div className="table-item">
                      1.
                    </div>
                    <div className="table-item">
                      Partner bonus
                    </div>
                    <div className="table-item">
                      750 UMI
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-item">
                      2.
                    </div>
                    <div className="table-item">
                      Team bonus
                    </div>
                    <div className="table-item">
                      500 UMI
                    </div>
                  </div>

                  <div className="table-row">
                    <div className="table-item">
                      3.
                    </div>
                    <div className="table-item">
                      Same Rank
                    </div>
                    <div className="table-item">
                      0 UMI
                    </div>
                  </div>

                  <div className="table-row">
                    <div className="table-item">
                      4.
                    </div>
                    <div className="table-item">
                      Global bonus
                    </div>
                    <div className="table-item">
                      0 UMI
                    </div>
                  </div>

                  <div className="table-row">
                    <div className="table-item">
                      Total bonus
                    </div>
                    <div className="table-item">
                      1 250 UMI
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
          <div className="col">
            <div className="graphic-statistics">
              <div className="title">
                Graphic bonuses statistics
              </div>
              <div className="list">
                <div className="list-row">
                  <div className="list-item">
                    <div className="circle secondary-900-bg" />
                    Partner bonus
                  </div>
                  <div className="list-item">
                    <div className="circle main-900-bg" />
                    Team bonus
                  </div>
                </div>
                <div className="list-row">
                  <div className="list-item">
                    <div className="circle pink-900-bg" />
                    Same Rank
                  </div>
                  <div className="list-item">
                    <div className="circle accent-900-bg" />
                    Global bonus
                  </div>
                </div>

              </div>
              <div className="chart">
                <Line data={data} options={options} />
              </div>
            </div>
          </div>
        </div>
        <div className="board board--bonus">
          <div className="title">
            Received bonuses
            <img src={savingIcon} alt="icon"/>
          </div>

          <div className="table-wrapper">
            <table className="table">
              <thead>
              <tr>
                <th>№</th>
                <th>transaction</th>
                <th>amount</th>
                <th>From </th>
                <th>Date / Time </th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td className="td-1">85.</td>
                <td className="td-2">
                  <div className="type">
                    <div className="table-item-circle secondary-900-bg" />
                    Pertner bonus:
                  </div>
                </td>
                <td className="td-3">10  UMI</td>
                <td className="td-4">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-5">21.01.2021 - 01:12</td>
              </tr>
              <tr>
                <td className="td-1">85.</td>
                <td className="td-2">
                  <div className="type">
                    <div className="table-item-circle secondary-900-bg" />
                    Pertner bonus:
                  </div>
                </td>
                <td className="td-3">10  UMI</td>
                <td className="td-4">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-5">21.01.2021 - 01:12</td>
              </tr>
              <tr>
                <td className="td-1">85.</td>
                <td className="td-2">
                  <div className="type">
                    <div className="table-item-circle secondary-900-bg" />
                    Pertner bonus:
                  </div>
                </td>
                <td className="td-3">10  UMI</td>
                <td className="td-4">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-5">21.01.2021 - 01:12</td>
              </tr>
              <tr>
                <td className="td-1">85.</td>
                <td className="td-2">
                  <div className="type">
                    <div className="table-item-circle secondary-900-bg" />
                    Pertner bonus:
                  </div>
                </td>
                <td className="td-3">10  UMI</td>
                <td className="td-4">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-5">21.01.2021 - 01:12</td>
              </tr>
              <tr>
                <td className="td-1">85.</td>
                <td className="td-2">
                  <div className="type">
                    <div className="table-item-circle secondary-900-bg" />
                    Pertner bonus:
                  </div>
                </td>
                <td className="td-3">10  UMI</td>
                <td className="td-4">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-5">21.01.2021 - 01:12</td>
              </tr>
              <tr>
                <td className="td-1">85.</td>
                <td className="td-2">
                  <div className="type">
                    <div className="table-item-circle secondary-900-bg" />
                    Pertner bonus:
                  </div>
                </td>
                <td className="td-3">10  UMI</td>
                <td className="td-4">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-5">21.01.2021 - 01:12</td>
              </tr>
              <tr>
                <td className="td-1">85.</td>
                <td className="td-2">
                  <div className="type">
                    <div className="table-item-circle secondary-900-bg" />
                    Pertner bonus:
                  </div>
                </td>
                <td className="td-3">10  UMI</td>
                <td className="td-4">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-5">21.01.2021 - 01:12</td>
              </tr>
              <tr>
                <td className="td-1">85.</td>
                <td className="td-2">
                  <div className="type">
                    <div className="table-item-circle secondary-900-bg" />
                    Pertner bonus:
                  </div>
                </td>
                <td className="td-3">10  UMI</td>
                <td className="td-4">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-5">21.01.2021 - 01:12</td>
              </tr>
              <tr>
                <td className="td-1">85.</td>
                <td className="td-2">
                  <div className="type">
                    <div className="table-item-circle secondary-900-bg" />
                    Pertner bonus:
                  </div>
                </td>
                <td className="td-3">10  UMI</td>
                <td className="td-4">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-5">21.01.2021 - 01:12</td>
              </tr>
              <tr>
                <td className="td-1">85.</td>
                <td className="td-2">
                  <div className="type">
                    <div className="table-item-circle secondary-900-bg" />
                    Pertner bonus:
                  </div>
                </td>
                <td className="td-3">10  UMI</td>
                <td className="td-4">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-5">21.01.2021 - 01:12</td>
              </tr>
              </tbody>
            </table>
          </div>


          <div className="pagination-wrapper">
            <div className="page-count">
              Rows per page:
              <input type="text" placeholder="10"/>
            </div>

            <div className="pagination">
              <PaginationRounded />
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <form className="form form--reports">
          <div className="form-item form-item--period">
            <CustomSelect />
          </div>
          <div className="form-item form-item--transaction">
            <CustomSelect />
          </div>
          <div className="form-item form-item--type">
            <CustomSelect />
          </div>
          <div className="form-item form-item--event">
            <CustomSelect />
          </div>
          <div className="form-item">
            <button className="btn" type="button">submit</button>
          </div>
        </form>

        <div className="user-info board">
          <div className="title">
            Your balance
          </div>
          <div className="currency-info">
            <div className="currency-info__item">
              <div className="icon">
                <Currency1 />
              </div>
              <div className="title">
                Balance UMI coin
              </div>
              <div className="value">
                100 UMI
              </div>
            </div>
            <div className="currency-info__item">
              <div className="icon">
                <Currency2 />
              </div>
              <div className="title">
                Balance Dollar ($)
              </div>
              <div className="value">
                236 USD
              </div>
            </div>
            <div className="currency-info__item">
              <div className="icon">
                <Currency3 />
              </div>
              <div className="title">
                Balance Dollar ($)
              </div>
              <div className="value">
                236 USD
              </div>
            </div>
            <div className="currency-info__item">
              <div className="icon">
                <Currency4 />
              </div>
              <div className="title">
                Balance Dollar ($)
              </div>
              <div className="value">
                236 USD
              </div>
            </div>
          </div>
        </div>
        <div className="board board--bonus">
          <div className="title">
            Received bonuses
            <img src={savingIcon} alt="icon"/>
          </div>

          <div className="table-wrapper">
            <table className="table table--statistic">
              <thead>
              <tr>
                <th>№</th>
                <th>Event</th>
                <th>amount</th>
                <th>debited / Credited</th>
                <th>From </th>
                <th>Date / TIME </th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td className="td-1">85.</td>
                <td className="td-2">
                  <div className="type">
                    <div className="table-item-circle secondary-900-bg" />
                    Pertner bonus:
                  </div>
                </td>
                <td className="td-3"><span className="value-up">10  UMI</span></td>
                <td className="td-4">Personal volume</td>
                <td className="td-5">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-6">21.01.2021 - 01:12</td>
              </tr>
              <tr>
                <td className="td-1">85.</td>
                <td className="td-2">
                  <div className="type">
                    <div className="table-item-circle secondary-900-bg" />
                    Pertner bonus:
                  </div>
                </td>
                <td className="td-3"><span className="value-down">10  UMI</span></td>
                <td className="td-4">Personal volume</td>
                <td className="td-5">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-6">21.01.2021 - 01:12</td>
              </tr>
              <tr>
                <td className="td-1">85.</td>
                <td className="td-2">
                  <div className="type">
                    <div className="table-item-circle secondary-900-bg" />
                    Pertner bonus:
                  </div>
                </td>
                <td className="td-3"><span className="value-up">10  UMI</span></td>
                <td className="td-4">Personal volume</td>
                <td className="td-5">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-6">21.01.2021 - 01:12</td>
              </tr>
              <tr>
                <td className="td-1">85.</td>
                <td className="td-2">
                  <div className="type">
                    <div className="table-item-circle secondary-900-bg" />
                    Pertner bonus:
                  </div>
                </td>
                <td className="td-3"><span className="value-down">10  UMI</span></td>
                <td className="td-4">Personal volume</td>
                <td className="td-5">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-6">21.01.2021 - 01:12</td>
              </tr>
              <tr>
                <td className="td-1">85.</td>
                <td className="td-2">
                  <div className="type">
                    <div className="table-item-circle secondary-900-bg" />
                    Pertner bonus:
                  </div>
                </td>
                <td className="td-3"><span className="value-up">10  UMI</span></td>
                <td className="td-4">Personal volume</td>
                <td className="td-5">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-6">21.01.2021 - 01:12</td>
              </tr>
              <tr>
                <td className="td-1">85.</td>
                <td className="td-2">
                  <div className="type">
                    <div className="table-item-circle secondary-900-bg" />
                    Pertner bonus:
                  </div>
                </td>
                <td className="td-3"><span className="value-down">10  UMI</span></td>
                <td className="td-4">Personal volume</td>
                <td className="td-5">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-6">21.01.2021 - 01:12</td>
              </tr>
              <tr>
                <td className="td-1">85.</td>
                <td className="td-2">
                  <div className="type">
                    <div className="table-item-circle secondary-900-bg" />
                    Pertner bonus:
                  </div>
                </td>
                <td className="td-3"><span className="value-up">10  UMI</span></td>
                <td className="td-4">Personal volume</td>
                <td className="td-5">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-6">21.01.2021 - 01:12</td>
              </tr>
              <tr>
                <td className="td-1">85.</td>
                <td className="td-2">
                  <div className="type">
                    <div className="table-item-circle secondary-900-bg" />
                    Pertner bonus:
                  </div>
                </td>
                <td className="td-3"><span className="value-down">10  UMI</span></td>
                <td className="td-4">Personal volume</td>
                <td className="td-5">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-6">21.01.2021 - 01:12</td>
              </tr>
              <tr>
                <td className="td-1">85.</td>
                <td className="td-2">
                  <div className="type">
                    <div className="table-item-circle secondary-900-bg" />
                    Pertner bonus:
                  </div>
                </td>
                <td className="td-3"><span className="value-up">10  UMI</span></td>
                <td className="td-4">Personal volume</td>
                <td className="td-5">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-6">21.01.2021 - 01:12</td>
              </tr>
              <tr>
                <td className="td-1">85.</td>
                <td className="td-2">
                  <div className="type">
                    <div className="table-item-circle secondary-900-bg" />
                    Pertner bonus:
                  </div>
                </td>
                <td className="td-3"><span className="value-down">10  UMI</span></td>
                <td className="td-4">Personal volume</td>
                <td className="td-5">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-6">21.01.2021 - 01:12</td>
              </tr>

              </tbody>
            </table>
          </div>
          <div className="pagination-wrapper">
            <div className="page-count">
              Rows per page:
              <input type="text" placeholder="10"/>
            </div>

            <div className="pagination">
              <PaginationRounded />
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <form className="form form--status">
          <div className="form-item form-item--period">
            <CustomSelect />
          </div>
          <div className="form-item form-item--user">
            <TextField className="textarea" label="Name" variant="outlined" />
          </div>
          <div className="form-item">
            <button className="btn" type="button">submit</button>
          </div>
        </form>
        <div className="container">
          <div className="col">
            <div className="user-status">
              <div className="title">
                Statuses history
              </div>

              <div className="table-wrapper">
                <div className="table">
                  <div className="table-row">
                    <div className="table-item">
                      RANK
                    </div>
                    <div className="table-item">
                      DATE / TIME
                    </div>
                  </div>

                  <div className="table-row">
                    <div className="table-item">
                      <div className="user-info">
                        <div className="user-pic">
                          <Progress
                            type="circle"
                            strokeWidth={6}
                            width={32}
                            strokeColor={{
                              '15%': '#FF5655',
                              '45%': '#E3E3E7',
                            }}
                            percent={15}
                            format={() => (
                              <img src={customer} alt=""/>
                            )}
                          />
                        </div>
                        piterparker
                      </div>
                    </div>
                    <div className="table-item">
                      15.08.2021 - 16:35
                    </div>
                  </div>

                  <div className="table-row">
                    <div className="table-item">
                      <div className="label black-600-bg">
                        1 lvl
                      </div>
                    </div>
                    <div className="table-item">
                      15.08.2021 - 16:35
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-item">
                      <div className="label black-600-bg">
                        1 lvl
                      </div>
                    </div>
                    <div className="table-item">
                      15.08.2021 - 16:35
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-item">
                      <div className="label black-600-bg">
                        1 lvl
                      </div>
                    </div>
                    <div className="table-item">
                      15.08.2021 - 16:35
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-item">
                      <div className="label black-600-bg">
                        1 lvl
                      </div>
                    </div>
                    <div className="table-item">
                      15.08.2021 - 16:35
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-item">
                      <div className="label black-600-bg">
                        1 lvl
                      </div>
                    </div>
                    <div className="table-item">
                      15.08.2021 - 16:35
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-item">
                      <div className="label black-600-bg">
                        1 lvl
                      </div>
                    </div>
                    <div className="table-item">
                      15.08.2021 - 16:35
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-item">
                      <div className="label black-600-bg">
                        1 lvl
                      </div>
                    </div>
                    <div className="table-item">
                      15.08.2021 - 16:35
                    </div>
                  </div>
                </div>
              </div>

              <div className="attention-info">
                <Warning />
                Please note that if the conditions are not met, you may lose the level.
              </div>
            </div>
          </div>
          <div className="col">
            <div className="personal-info">
              <div className="title">
                Personal progress
              </div>

              <div className="progress-info">
                <div className="progress-info__item">
                  <div className="progress-info-icon">
                    <ProgressIcon />
                  </div>
                  <div className="progress-info-description">
                    <div className="title">
                      Current rank
                    </div>
                    <div className="value">
                      7 LVL
                    </div>
                  </div>
                </div>
                <div className="progress-info__item disabled">
                  <div className="progress-info-icon">
                    <BlockIcon />
                  </div>
                  <div className="progress-info-description">
                    <div className="title">
                      Current rank
                    </div>
                    <div className="value">
                      7 LVL
                    </div>
                  </div>
                </div>
              </div>
              <div className="attention-info">
                <Warning />
                To achieve a new status, all conditions must be met
              </div>

              <div className="volumes-info">
                <div className="title">
                  Volumes
                </div>

                <div className="volumes-chart">
                  <div className="volumes-chart__item">
                    <div className="chart">
                      <Doughnut
                        data={data2}
                      />
                      <div className="chart-data">
                        <div className="title">
                          Personal volume
                        </div>
                        <div className="value">
                          2 500 UMI
                        </div>
                      </div>
                    </div>
                    <div className="balance">
                      <div className="balance-icon main-900-bg" />
                      Goal: <strong>3 000 UMI</strong>
                    </div>
                    <div className="balance">
                      <div className="balance-icon black-500-bg" />
                      Left: <strong>500 UMI</strong>
                    </div>
                  </div>
                  <div className="volumes-chart__item">
                    <div className="chart">
                      <Doughnut
                        data={data3}
                      />
                      <div className="chart-data">
                        <div className="title">
                          Group volume
                        </div>
                        <div className="value">
                          8 500 UMI
                        </div>
                      </div>
                    </div>
                    <div className="balance">
                      <div className="balance-icon secondary-900-bg" />
                      Goal: <strong>10 000 UMI</strong>
                    </div>
                    <div className="balance">
                      <div className="balance-icon black-500-bg" />
                      Left: <strong>1 500 UMI</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-info">
                <Lvl2 />
                <div className="progress-bar">
                  <div className="title">
                    Partners in status
                    <span>
                    2 Level
                  </span>
                  </div>
                  <div className="progress" />
                  <div className="count">
                    1 of 3
                  </div>
                </div>
                <DoubleArrow />
                <Lvl3 />
              </div>

            </div>
          </div>
        </div>
        <div className="partner-info board">
          <div className="title">
            Partner statuses in the structure
          </div>
          <div className="attention-info">
            <Warning />
            Please note that if the conditions are not met, you may lose the level.
          </div>

          <div className="table-wrapper">
            <table className="table">
              <thead>
              <tr>
                <th></th>
                <th>LVL 1</th>
                <th>LVL 2</th>
                <th>LVL 3</th>
                <th>LVL 4</th>
                <th>LVL 5</th>
                <th>LVL 6</th>
                <th>LVL 7</th>
                <th>LVL 8</th>
                <th>LVL 9</th>
                <th>LVL 10</th>
                <th>TOTAL</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <div className="label black-600-bg">
                    1 lvl
                  </div>
                </td>
                <td>
                  10
                </td>
                <td>10</td>
                <td>
                  10
                </td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>
                  <div className="label black-600-bg">
                    1 lvl
                  </div>
                </td>
                <td>
                  10
                </td>
                <td>10</td>
                <td>
                  10
                </td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>
                  <div className="label black-600-bg">
                    1 lvl
                  </div>
                </td>
                <td>
                  10
                </td>
                <td>10</td>
                <td>
                  10
                </td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>
                  <div className="label black-600-bg">
                    1 lvl
                  </div>
                </td>
                <td>
                  10
                </td>
                <td>10</td>
                <td>
                  10
                </td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>
                  <div className="label black-600-bg">
                    1 lvl
                  </div>
                </td>
                <td>
                  10
                </td>
                <td>10</td>
                <td>
                  10
                </td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>
                  Total
                </td>
                <td>
                  10
                </td>
                <td>10</td>
                <td>
                  10
                </td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="btn-wrapper">
            <button type="button" className="btn btn--purple">
              hide level
            </button>
            <button type="button" className="btn btn--default">
              next 5 level
            </button>
          </div>
        </div>
        <div className="history-info board">
          <div className="title">
            Status assignment history
            <img src={savingIcon} alt="icon"/>
          </div>

          <div className="table-wrapper">
            <table className="table">
              <thead>
              <tr>
                <th>PARTNER</th>
                <th>Rank</th>
                <th>DATE / TIME</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td className="td-1">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-2">
                  <div className="label black-600-bg">
                    1 lvl
                  </div>
                </td>
                <td className="td-3">21.01.2021 - 01:12</td>
              </tr>
              <tr>
                <td className="td-1">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-2">
                  <div className="label black-600-bg">
                    1 lvl
                  </div>
                </td>
                <td className="td-3">21.01.2021 - 01:12</td>
              </tr>
              <tr>
                <td className="td-1">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-2">
                  <div className="label black-600-bg">
                    1 lvl
                  </div>
                </td>
                <td className="td-3">21.01.2021 - 01:12</td>
              </tr>
              <tr>
                <td className="td-1">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-2">
                  <div className="label black-600-bg">
                    1 lvl
                  </div>
                </td>
                <td className="td-3">21.01.2021 - 01:12</td>
              </tr>
              <tr>
                <td className="td-1">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-2">
                  <div className="label black-600-bg">
                    1 lvl
                  </div>
                </td>
                <td className="td-3">21.01.2021 - 01:12</td>
              </tr>
              <tr>
                <td className="td-1">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-2">
                  <div className="label black-600-bg">
                    1 lvl
                  </div>
                </td>
                <td className="td-3">21.01.2021 - 01:12</td>
              </tr>
              <tr>
                <td className="td-1">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-2">
                  <div className="label black-600-bg">
                    1 lvl
                  </div>
                </td>
                <td className="td-3">21.01.2021 - 01:12</td>
              </tr>
              <tr>
                <td className="td-1">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-2">
                  <div className="label black-600-bg">
                    1 lvl
                  </div>
                </td>
                <td className="td-3">21.01.2021 - 01:12</td>
              </tr>
              <tr>
                <td className="td-1">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-2">
                  <div className="label black-600-bg">
                    1 lvl
                  </div>
                </td>
                <td className="td-3">21.01.2021 - 01:12</td>
              </tr>
              <tr>
                <td className="td-1">
                  <div className="user-info">
                    <div className="user-pic">
                      <Progress
                        type="circle"
                        strokeWidth={6}
                        width={32}
                        strokeColor={{
                          '15%': '#FF5655',
                          '45%': '#E3E3E7',
                        }}
                        percent={15}
                        format={() => (
                          <img src={customer} alt=""/>
                        )}
                      />
                    </div>
                    piterparker
                  </div>
                </td>
                <td className="td-2">
                  <div className="label black-600-bg">
                    1 lvl
                  </div>
                </td>
                <td className="td-3">21.01.2021 - 01:12</td>
              </tr>

              </tbody>
            </table>
          </div>


          <div className="pagination-wrapper">
            <div className="page-count">
              Rows per page:
              <input type="text" placeholder="10"/>
            </div>

            <div className="pagination">
              <PaginationRounded />
            </div>
          </div>
        </div>
      </TabPanel>
    </>
  );
}