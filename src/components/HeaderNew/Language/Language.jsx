import React, {useState} from 'react';
import cx from 'classnames';

import english from '../../../assets/icons/Language/English.svg'
import ukrainian from "../../../assets/icons/Language/Ukrainian.svg";
import chinese from "../../../assets/icons/Language/Chinese.svg";
import russian from "../../../assets/icons/Language/Russian.svg";

import styles from './Language.module.scss'

function Language(props) {
    const [selectedLanguage, setSelectedLanguage] = useState({img: english,language:"English"})
    const [toggled,setToggled] = useState(false)

    const handleToggle = () => {
        setToggled(!toggled)
    }

    const setLanguage = (img,language) => {
        setSelectedLanguage({img: img,language: language})
    }

    const classnames = cx(styles.languageSelectWrapper, {[styles.languageSelectWrapperClosed]: !toggled})
    return (
        <div style={{marginRight: "8px", position: "relative",cursor: "pointer"}} onClick={handleToggle}>
            <img src={selectedLanguage.img} alt="Language"/>
            <div className={classnames}>
                <div className={styles.menuItem} onClick={() => setLanguage(english,"English")}>
                    <img src={english} alt="english" className={styles.menuItemIcon}/>
                    <p className={styles.menuItemText}>English</p>
                </div>
                <div className={styles.menuItem} onClick={() => setLanguage(ukrainian,"Ukrainian")}>
                    <img src={ukrainian} alt="Ukrainian" className={styles.menuItemIcon}/>
                    <p className={styles.menuItemText}>Ukrainian</p>
                </div>
                <div className={styles.menuItem} onClick={() => setLanguage(chinese,"Chinese")}>
                    <img src={chinese} alt="Chinese" className={styles.menuItemIcon}/>
                    <p className={styles.menuItemText}>Chinese</p>
                </div>
                <div className={styles.menuItem} onClick={() => setLanguage(russian,"Russian")}>
                    <img src={russian} alt="Russian" className={styles.menuItemIcon}/>
                    <p className={styles.menuItemText}>Russian</p>
                </div>
            </div>
        </div>
    );
}

export default Language;