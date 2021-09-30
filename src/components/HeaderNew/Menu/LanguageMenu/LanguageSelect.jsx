import React, {useState} from 'react';
import {FormControl, MenuItem, Select} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import english from "../../../../assets/icons/Language/English.svg";
import ukrainian from "../../../../assets/icons/Language/Ukrainian.svg";
import chinese from "../../../../assets/icons/Language/Chinese.svg";
import russian from "../../../../assets/icons/Language/Russian.svg";

import styles from "../Menu.module.scss";

import {makeStyles} from "@mui/styles";
import {generateStyles} from "../generateStyles";

function LanguageSelect(props) {
    const useStyles = makeStyles(generateStyles)
    const classes = useStyles();

    const [chosenLanguage, setChosenLanguage] = useState('English')

    const handleChange = (event) => {
        setChosenLanguage(event.target.value)
    }
    return (
        <>
            <FormControl variant="outlined" className={classes.formControl}>
                <Select
                    value={chosenLanguage}
                    onChange={handleChange}
                    IconComponent={ExpandMoreIcon}
                    className="menu-lang"
                >
                    <MenuItem value={"English"}>
                        <div className={classes.menuItem}>
                            <img src={english} alt="english" className={styles.menuItemIcon}/>
                            <p className={styles.menuItemText}>English</p>
                        </div>
                    </MenuItem>
                    <MenuItem value={"Russian"}>
                        <div className={classes.menuItem}>
                            <img src={ukrainian} alt="Ukrainian" className={styles.menuItemIcon}/>
                            <p className={styles.menuItemText}>Ukrainian</p>
                        </div>
                    </MenuItem>
                    <MenuItem value={"Ukrainian"}>
                        <div className={classes.menuItem}>
                            <img src={chinese} alt="Chinese" className={styles.menuItemIcon}/>
                            <p className={styles.menuItemText}>Chinese</p>
                        </div>
                    </MenuItem>
                    <MenuItem value={"Chinese"}>
                        <div className={classes.menuItem}>
                            <img src={russian} alt="Russian" className={styles.menuItemIcon}/>
                            <p className={styles.menuItemText}>Russian</p>
                        </div>
                    </MenuItem>
                </Select>
            </FormControl>
        </>
    );
}

export default LanguageSelect;