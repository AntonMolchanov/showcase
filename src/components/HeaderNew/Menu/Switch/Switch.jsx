import React from 'react';
import styles from './Switch.module.scss'
import cx from 'classnames'

function Switch({isToggled, onToggle}) {


    return (
        <label className={styles.switch}>
            <input type="checkbox" checked={isToggled} onChange={onToggle}/>
            <span className={styles.slider}/>
        </label>
    );
}

export default Switch;