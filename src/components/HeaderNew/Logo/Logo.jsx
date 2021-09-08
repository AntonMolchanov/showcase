import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames'
import logo from '../../../assets/icons/Subtract.svg'
import styles from './Logo.module.scss'

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