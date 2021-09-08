import React from 'react';
import appStore from "../../../assets/icons/AppStore.svg";
import googlePlay from "../../../assets/icons/GooglePlay.svg";
import styles from './DistributionBtns.module.scss'

function DistributionBtns(props) {
    return (
        <div className={styles.distributionBtns}>
            <button className={styles.distributionButton}>
                <div className={styles.btnContent}>
                    <img className={styles.btnIcon} src={appStore} alt="App Store"/>
                    <div>
                        <p className={`${styles.btnTitle} ${styles.btnText}`}>Download</p>
                        <p className={`${styles.btnSubtitle} ${styles.btnText}`}>App Store</p>
                    </div>
                </div>
            </button>
            <button className={styles.distributionButton}>
                <div className={styles.btnContent}>
                    <img className={styles.btnIcon} src={googlePlay} alt="Google Play"/>
                    <div>
                        <p className={`${styles.btnTitle} ${styles.btnText}`}>Download</p>
                        <p className={`${styles.btnSubtitle} ${styles.btnText}`}>Google Play</p>
                    </div>
                </div>
            </button>
        </div>
    );
}

export default DistributionBtns;