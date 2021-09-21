import React from 'react';
import Header from "../components/HeaderNew/Header";
import Menu from "../components/HeaderNew/Menu/Menu";
import Footer from "../components/Footer/Footer";

import styles from './index.module.scss'

function Layout({children}) {
    return (
      <div className="wrapper">
        <div className={styles.wrapper}>
            <Header commonClass={styles.header}/>
            <Menu commonClass={styles.nav}/>
            <div className={styles.content}>
              { children }
            </div>
            <Footer />
        </div>
      </div>
    );
}

export default Layout;