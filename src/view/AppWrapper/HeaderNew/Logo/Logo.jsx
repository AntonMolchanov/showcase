import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../icons/Subtract.svg'
import styles from './Logo.module.scss'
import cx from 'classnames'

function Logo({isOpen}) {

    const logoCx = cx(styles.logoWrapper, isOpen ? styles.logoOpen : styles.logoClosed)

    return (
        <Link to="/" className={logoCx}>
            <div className={styles.logo}>
                <img className={styles.logoIcon} src={logo} alt="BITL"/>
                <h3 className={styles.logoText}>BITL</h3>
            </div>
        </Link>
    );
}

export default Logo;