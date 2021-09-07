import React from 'react';
import styles from './AppWrapper.module.scss'
import Header from "./HeaderNew/Header";
import Menu from "./HeaderNew/Menu/Menu";
AppWrapper.propTypes = {
    
};

function AppWrapper(props) {
    return (
        <div className={styles.wrapper}>
            <Header commonClass={styles.header}/>
            <Menu commonClass={styles.nav}/>
            <div className={styles.content}>
            </div>
        </div>
    );
}

export default AppWrapper;