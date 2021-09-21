import { Doughnut } from 'react-chartjs-2';
import "./PersonalAreaPage.scss"

import {ReactComponent as Info1} from "../../assets/icons/info-1.svg"
import {ReactComponent as Info2} from "../../assets/icons/info-2.svg"
import {ReactComponent as Info3} from "../../assets/icons/info-3.svg"
import {ReactComponent as Info4} from "../../assets/icons/info-4.svg"

import {ReactComponent as Currency1} from "../../assets/icons/currency1.svg"
import {ReactComponent as Currency2} from "../../assets/icons/currency2.svg"

import {ReactComponent as CopyIcon} from "../../assets/icons/Copy.svg"

import {ReactComponent as Percent} from "../../assets/icons/percent.svg"
import {ReactComponent as Calendar} from "../../assets/icons/Calendar.svg"
import {ReactComponent as ProgressIcon} from "../../assets/icons/progress.svg"
import {ReactComponent as BlockIcon} from "../../assets/icons/block.svg"
import {ReactComponent as Warning} from "../../assets/icons/Warning.svg"
import {ReactComponent as Lvl2} from "../../assets/icons/lvl2.svg"
import {ReactComponent as Lvl3} from "../../assets/icons/lvl3.svg"
import {ReactComponent as DoubleArrow} from "../../assets/icons/Double-Right.svg"
import UserPic from "../../assets/Userpic.png"

import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';

const data = {
  datasets: [
    {
      label: '# of Votes',
      data: [17, 83, ],
      backgroundColor: [
        '#A6D4FF',
        '#7B61FF',
      ],
      borderWidth: 0,
      rotation: 300,
      cutout: 100
    },
  ],
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

const PersonalAreaPage = () => {
  return (
    <section className="section section--personal">
      <h1 className="h1">
        Personal Area
      </h1>

      <ul className="structure-info-list">
        <li className="board structure-info-list__item">
          <div className="icon">
            <Info1 />
          </div>
          <div className="title">
            Participants <span>(People)</span>
          </div>
          <div className="value">
            10 576
          </div>
        </li>

        <li className="board structure-info-list__item">
          <div className="icon">
            <Info2 />
          </div>
          <div className="title">
            Total coin <span>(UMI)</span>
          </div>
          <div className="value">
            105 670 004
          </div>
        </li>

        <li className="board structure-info-list__item">
          <div className="icon">
            <Info3 />
          </div>
          <div className="title">
            Staking <span>(Per month)</span>
          </div>
          <div className="value">
            30%
          </div>
        </li>

        <li className="board structure-info-list__item">
          <div className="icon">
            <Info4 />
          </div>
          <div className="title">
            Bonuses paid <span>(UMI)</span>
          </div>
          <div className="value">
            5 670 004
          </div>
        </li>
      </ul>

      <div className="container container--user-info">
        <div className="col">
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
            </div>

            <div className="input-field">
              <TextField
                label="Amount address"
                type="text"
                variant="outlined"
                className="textarea"
                defaultValue="v9ajmwyu4zldjhnnzzshkz7ghoodfl8bbssdg118dhdjj"
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
          </div>

          <div className="course-info board">
            <div className="title">
              Course and staking
            </div>

            <div className="course">
              <div className="course-item">
                <div className="title">
                  UMI coin
                </div>
                <div className="value">
                  1.00 UMI
                </div>
              </div>
              <div className="course-item">
                <div className="title">
                  Dollar
                </div>
                <div className="value">
                  2.36 USD
                </div>
              </div>
            </div>
            <div className="amount">
              <div className="amount-item">
                <div className="icon">
                  <Percent />
                </div>
                <div className="title">
                  Percent staking <span>(Per day)</span>
                </div>
              </div>
              <div className="amount-item">
                <div className="value">
                  0.93%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="user-rate board">
            <div className="title">
              Bonuses for the current month
              <Calendar />
            </div>

            <div className="chart">
              <Doughnut
                data={data}
              />
              <div className="chart-data">
                <div className="title">
                  Partner bonus
                </div>
                <div className="value">
                  366 UMI
                </div>
                <div className="sub-value">
                  863.76 USD
                </div>
              </div>
            </div>
            <div className="table">
              <div className="table-row">
                <div className="table-item">
                  Type
                </div>
                <div className="table-item">
                  Crypto
                </div>
                <div className="table-item">
                  Fiat
                </div>
              </div>
              <div className="table-row">
                <div className="table-item">

                  <div className="type">
                    <div className="table-item-circle secondary-900-bg" />
                    Pertner bonus:
                  </div>
                </div>
                <div className="table-item">
                  <strong>366 UMI</strong>
                </div>
                <div className="table-item">
                  <span>863.76 USD</span>
                </div>
              </div>
              <div className="table-row">
                <div className="table-item">

                  <div className="type">
                    <div className="table-item-circle marina-900-bg" />
                    Team bonus:
                  </div>
                </div>
                <div className="table-item">
                  <strong>100 UMI</strong>
                </div>
                <div className="table-item">
                  <span>863.76 USD</span>
                </div>
              </div>
              <div className="table-row">
                <div className="table-item">

                  <div className="type">
                    <div className="table-item-circle accent-900-bg" />
                    Global bonus:
                  </div>
                </div>
                <div className="table-item">
                  <strong>0.00 UMI</strong>
                </div>
                <div className="table-item">
                  <span>0.00 USD</span>
                </div>
              </div>
              <div className="table-row">
                <div className="table-item">
                  <strong className="total">
                    Total bonus
                  </strong>
                </div>
                <div className="table-item">
                  <strong>466 UMI</strong>
                </div>
                <div className="table-item">
                  <span>1096.76 USD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="col">
          <div className="recent-info board">
            <div className="title">
              Recent invitations
            </div>
            <div className="table">
              <div className="table-row">
                <div className="table-item">
                  №
                </div>
                <div className="table-item">
                  Nikname
                </div>
                <div className="table-item">
                  Date / Time
                </div>
              </div>

              <div className="table-row">
                <div className="table-item">
                  1
                </div>
                <div className="table-item">
                  <div className="user-info">
                    <img src={UserPic} alt="user"/>
                    piterparker
                  </div>
                </div>
                <div className="table-item">
                  <span>15.08.2021 - 16:35</span>
                </div>
              </div>
              <div className="table-row">
                <div className="table-item">
                  2
                </div>
                <div className="table-item">
                  <div className="user-info">
                    <img src={UserPic} alt="user"/>
                    piterparker
                  </div>
                </div>
                <div className="table-item">
                  <span>15.08.2021 - 16:35</span>
                </div>
              </div>
              <div className="table-row">
                <div className="table-item">
                  3
                </div>
                <div className="table-item">
                  <div className="user-info">
                    <img src={UserPic} alt="user"/>
                    piterparker
                  </div>
                </div>
                <div className="table-item">
                  <span>15.08.2021 - 16:35</span>
                </div>
              </div>
              <div className="table-row">
                <div className="table-item">
                  4
                </div>
                <div className="table-item">
                  <div className="user-info">
                    <img src={UserPic} alt="user"/>
                    piterparker
                  </div>
                </div>
                <div className="table-item">
                  <span>15.08.2021 - 16:35</span>
                </div>
              </div>
              <div className="table-row">
                <div className="table-item">
                  5
                </div>
                <div className="table-item">
                  <div className="user-info">
                    <img src={UserPic} alt="user"/>
                    piterparker
                  </div>
                </div>
                <div className="table-item">
                  <span>15.08.2021 - 16:35</span>
                </div>
              </div>
              <div className="table-row">
                <div className="table-item">
                  6
                </div>
                <div className="table-item">
                  <div className="user-info">
                    <img src={UserPic} alt="user"/>
                    piterparker
                  </div>
                </div>
                <div className="table-item">
                  <span>15.08.2021 - 16:35</span>
                </div>
              </div>
              <div className="table-row">
                <div className="table-item">
                  7
                </div>
                <div className="table-item">
                  <div className="user-info">
                    <img src={UserPic} alt="user"/>
                    piterparker
                  </div>
                </div>
                <div className="table-item">
                  <span>15.08.2021 - 16:35</span>
                </div>
              </div>
              <div className="table-row">
                <div className="table-item">
                  8
                </div>
                <div className="table-item">
                  <div className="user-info">
                    <img src={UserPic} alt="user"/>
                    piterparker
                  </div>
                </div>
                <div className="table-item">
                  <span>15.08.2021 - 16:35</span>
                </div>
              </div>
              <div className="table-row">
                <div className="table-item">
                  9
                </div>
                <div className="table-item">
                  <div className="user-info">
                    <img src={UserPic} alt="user"/>
                    piterparker
                  </div>
                </div>
                <div className="table-item">
                  <span>15.08.2021 - 16:35</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="personal-info board">
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
    </section>
  )
}

export default PersonalAreaPage