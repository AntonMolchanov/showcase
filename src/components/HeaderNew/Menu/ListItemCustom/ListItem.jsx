import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import styles from "../Menu.module.scss";
import cx from 'classnames'

import {makeStyles} from "@mui/styles";
import {ListItem} from "@mui/material"
import {generateStyles} from "../generateStyles";
import useWindowSize from "../../../../hooks/useWindowSize";
import constants from "../../../../constants/constants";


function ListItemMenu({linkTo,chosenCategory,handleCategoryChange, alt,categoryName,activeIcon,icon,text, handleHover, hoveredOnCategory,handleHoverLeave}) {
    const [isDesktop,setIsDesktop] = useState();
    const {width} = useWindowSize()

    useEffect(() => {
        setIsDesktop(width >= constants.WINDOW_DESKTOP_SIZE)
    },[width])

    const useStyles = makeStyles(generateStyles);
    const classes = useStyles();

    let listItemCx = cx(styles.listItemContent, { [styles.activeLink]: categoryName === chosenCategory });

    let listItem;

    !isDesktop
    ?
        listItem = <>
            <ListItem className={classes.listItem}>
                <NavLink to={linkTo} className={listItemCx}
                         onClick={() => handleCategoryChange(categoryName)}>
                    <img
                        className={styles.icon}
                        src={chosenCategory === categoryName ? activeIcon : icon}
                        alt={alt}/>
                    <p>{text}</p>
                </NavLink>
            </ListItem>
        </>
        :
        listItem = <>
            <ListItem className={classes.listItem} onMouseEnter={() => handleHover(categoryName)} onMouseLeave={handleHoverLeave}>
                <NavLink to={linkTo} className={listItemCx}
                         onClick={() => handleCategoryChange(categoryName)}>
                    <img
                        className={styles.icon}
                        src={chosenCategory === categoryName || hoveredOnCategory === categoryName ? activeIcon : icon}
                        alt={alt}/>
                    <p>{text}</p>
                </NavLink>
            </ListItem>
        </>

    return (
        <>
            {listItem}
        </>
    );
}

export default ListItemMenu;