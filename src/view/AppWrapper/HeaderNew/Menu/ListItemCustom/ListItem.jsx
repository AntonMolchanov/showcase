import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "../Menu.module.scss";
import cx from 'classnames'

import {ListItem, makeStyles} from "@material-ui/core";
import {generateStyles} from "../generateStyles";


function ListItemMenu({linkTo,chosenCategory,handleCategoryChange, alt,categoryName,activeIcon,icon,text, handleHover, hoveredOnCategory,handleHoverLeave}) {
    const useStyles = makeStyles(generateStyles);
    const classes = useStyles();

    let listItemCx = cx(styles.listItemContent, { [styles.activeLink]: categoryName === chosenCategory });

    return (
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
    );
}

export default ListItemMenu;