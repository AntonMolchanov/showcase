import React, {useEffect, useState} from 'react';
import {
    List,
    ListItem,
    Divider,
} from "@material-ui/core";

import styles from './Menu.module.scss'

import personalArea from './menuIcons/Area.svg'
import personalAreaActive from './menuIcons/AreaActive.svg'
import referrals from './menuIcons/Refferals.svg'
import referralsActive from './menuIcons/RefferalsActive.svg'
import transactions from './menuIcons/Bills 1 copy.svg'
import transactionsActive from './menuIcons/TransactionsActive.svg'
import reports from './menuIcons/Reports 1.svg'
import reportsActive from './menuIcons/ReportsActive.svg'
import profile from './menuIcons/Profile.svg'
import profileActive from './menuIcons/ProfileActive.svg'
import faq from './menuIcons/FAQ.svg'
import faqActive from './menuIcons/FAQactive.svg'
import news from './menuIcons/News.svg'
import newsActive from './menuIcons/NewsActive.svg'
import blackMode from './menuIcons/Black Line.svg'
import blackModeActive from './menuIcons/BlackLineActive.svg'

import logout from './menuIcons/Logout.svg'
import logoutActive from './menuIcons/LogoutActive.svg'

import {makeStyles} from "@material-ui/core";
import {generateStyles} from "./generateStyles";
import Switch from "./Switch/Switch";
import DistributionBtns from "../DistributionBtns/DistributionBtns";
import LanguageSelect from "./LanguageMenu/LanguageSelect";
import ListItemMenu from "./ListItemCustom/ListItem";
import cx from "classnames";
import useWindowSize from "../../../hooks/useWindowSize";
import constants from "../../../constants/constants";

function Menu({isOpen, commonClass}) {
    const useStyles = makeStyles(generateStyles(isOpen))
    const classes = useStyles()
    const [isToggled, setIsToggled] = useState(false);
    const [chosenCategory, setChosenCategory] = useState("personal")
    const [hoveredOnCategory, setHoveredOnCategory] = useState("personal")
    const [isDesktop,setIsDesktop] = useState();
    const {width} = useWindowSize()

    useEffect(() => {
        setIsDesktop(width >= constants.WINDOW_TABLET_SIZE)
    },[width])

    const cxHeader = cx(classes.menu,{[commonClass]: commonClass})

    const handleCategoryChange = (menuItem) => {
        setChosenCategory(menuItem)
    }
    const handleHover = (menuItem) => {
        setHoveredOnCategory(menuItem)
    }
    const handleHoverLeave = () => {
        setHoveredOnCategory(null)
    }

    let menu;

    !isDesktop
    ?
        menu = <div className={classes.menu}>
            <LanguageSelect/>
            <div>
                <Divider/>
                <List component="nav" className={styles.nav}>
                    <ListItemMenu icon={personalArea}
                                  alt="Personal area"
                                  chosenCategory={chosenCategory}
                                  handleCategoryChange={(menuItem) => handleCategoryChange(menuItem)}
                                  activeIcon={personalAreaActive}
                                  categoryName="personal"
                                  linkTo="/personal"
                                  text="Personal area"
                    />
                    <ListItemMenu icon={referrals}
                                  alt="Referrals"
                                  chosenCategory={chosenCategory}
                                  handleCategoryChange={(menuItem) => handleCategoryChange(menuItem)}
                                  activeIcon={referralsActive}
                                  categoryName="referrals"
                                  linkTo="/referrals"
                                  text="Referrals"
                    />
                    <ListItemMenu icon={transactions}
                                  alt="Transactions"
                                  chosenCategory={chosenCategory}
                                  handleCategoryChange={(menuItem) => handleCategoryChange(menuItem)}
                                  activeIcon={transactionsActive}
                                  categoryName="transactions"
                                  linkTo="/transactions"
                                  text="Transactions"
                    />
                    <ListItemMenu icon={reports}
                                  alt="Reports"
                                  chosenCategory={chosenCategory}
                                  handleCategoryChange={(menuItem) => handleCategoryChange(menuItem)}
                                  activeIcon={reportsActive}
                                  categoryName="reports"
                                  linkTo="/reports"
                                  text="Reports"
                    />
                    <ListItemMenu icon={profile}
                                  alt="Profile"
                                  chosenCategory={chosenCategory}
                                  handleCategoryChange={(menuItem) => handleCategoryChange(menuItem)}
                                  activeIcon={profileActive}
                                  categoryName="profile"
                                  linkTo="/profile"
                                  text="Profile"
                    />
                </List>

                <Divider/>

                <List component="nav" className={styles.nav}>
                    <ListItemMenu icon={faq}
                                  alt="FAQ"
                                  chosenCategory={chosenCategory}
                                  handleCategoryChange={(menuItem) => handleCategoryChange(menuItem)}
                                  activeIcon={faqActive}
                                  categoryName="faq"
                                  linkTo="/faq"
                                  text="FAQ"
                    />
                    <ListItemMenu icon={news}
                                  alt="News"
                                  chosenCategory={chosenCategory}
                                  handleCategoryChange={(menuItem) => handleCategoryChange(menuItem)}
                                  activeIcon={newsActive}
                                  categoryName="news"
                                  linkTo="/news"
                                  text="News"
                    />
                </List>

                <Divider/>

                <List component="nav" className={styles.nav}>
                    <ListItem className={classes.listItem}>
                        <div className={styles.listItemContent} style={{width: "100%", justifyContent: "space-between"}}
                        >
                            <div style={{display: "flex", alignItems: "center"}}>
                                <img
                                    className={styles.icon}
                                    src={blackMode}
                                    alt="Black mode"/>
                                <p>BLACK MODE</p>
                            </div>
                            <Switch isToggled={isToggled}
                                    onToggle={() => setIsToggled(!isToggled)}
                            />
                        </div>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <div className={styles.listItemContent}
                        >
                            <img
                                className={styles.icon}
                                src={logout}
                                alt="LOGOUT"/>
                            <p>LOGOUT</p>
                        </div>
                    </ListItem>
                </List>
                <div className={styles.distributionBtns}>
                    <DistributionBtns/>
                </div>
            </div>
        </div>
        : menu = <>
            <div className={styles.navWrapper}>
                <List component="nav" className={styles.nav}>
                    <ListItemMenu icon={personalArea}
                                  alt="Personal area"
                                  handleHover={(menuItem) => handleHover(menuItem)}
                                  handleHoverLeave={handleHoverLeave}
                                  hoveredOnCategory={hoveredOnCategory}
                                  chosenCategory={chosenCategory}
                                  handleCategoryChange={(menuItem) => handleCategoryChange(menuItem)}
                                  activeIcon={personalAreaActive}
                                  categoryName="personal"
                                  linkTo="/personal"
                                  text="Personal area"
                    />
                    <ListItemMenu icon={referrals}
                                  alt="Referrals"
                                  handleHover={(menuItem) => handleHover(menuItem)}
                                  handleHoverLeave={handleHoverLeave}
                                  hoveredOnCategory={hoveredOnCategory}
                                  chosenCategory={chosenCategory}
                                  handleCategoryChange={(menuItem) => handleCategoryChange(menuItem)}
                                  activeIcon={referralsActive}
                                  categoryName="referrals"
                                  linkTo="/referrals"
                                  text="Referrals"
                    />
                    <ListItemMenu icon={transactions}
                                  alt="Transactions"
                                  handleHover={(menuItem) => handleHover(menuItem)}
                                  handleHoverLeave={handleHoverLeave}
                                  hoveredOnCategory={hoveredOnCategory}
                                  chosenCategory={chosenCategory}
                                  handleCategoryChange={(menuItem) => handleCategoryChange(menuItem)}
                                  activeIcon={transactionsActive}
                                  categoryName="transactions"
                                  linkTo="/transactions"
                                  text="Transactions"
                    />
                    <ListItemMenu icon={reports}
                                  alt="Reports"
                                  handleHover={(menuItem) => handleHover(menuItem)}
                                  handleHoverLeave={handleHoverLeave}
                                  hoveredOnCategory={hoveredOnCategory}
                                  chosenCategory={chosenCategory}
                                  handleCategoryChange={(menuItem) => handleCategoryChange(menuItem)}
                                  activeIcon={reportsActive}
                                  categoryName="reports"
                                  linkTo="/reports"
                                  text="Reports"
                    />
                    <ListItemMenu icon={profile}
                                  alt="Profile"
                                  handleHover={(menuItem) => handleHover(menuItem)}
                                  handleHoverLeave={handleHoverLeave}
                                  hoveredOnCategory={hoveredOnCategory}
                                  chosenCategory={chosenCategory}
                                  handleCategoryChange={(menuItem) => handleCategoryChange(menuItem)}
                                  activeIcon={profileActive}
                                  categoryName="profile"
                                  linkTo="/profile"
                                  text="Profile"
                    />
                </List>

                <Divider/>

                <List component="nav" className={styles.nav}>
                    <ListItemMenu icon={faq}
                                  alt="FAQ"
                                  handleHover={(menuItem) => handleHover(menuItem)}
                                  handleHoverLeave={handleHoverLeave}
                                  hoveredOnCategory={hoveredOnCategory}
                                  chosenCategory={chosenCategory}
                                  handleCategoryChange={(menuItem) => handleCategoryChange(menuItem)}
                                  activeIcon={faqActive}
                                  categoryName="faq"
                                  linkTo="/faq"
                                  text="FAQ"
                    />
                    <ListItemMenu icon={news}
                                  alt="News"
                                  handleHover={(menuItem) => handleHover(menuItem)}
                                  handleHoverLeave={handleHoverLeave}
                                  hoveredOnCategory={hoveredOnCategory}
                                  chosenCategory={chosenCategory}
                                  handleCategoryChange={(menuItem) => handleCategoryChange(menuItem)}
                                  activeIcon={newsActive}
                                  categoryName="news"
                                  linkTo="/news"
                                  text="News"
                    />
                </List>

                <Divider/>

                <List component="nav" className={styles.nav}>
                    <ListItem className={classes.listItem}
                              style={{cursor: "pointer"}}
                              onMouseEnter={() => handleHover('BLACKMODE')}
                              onMouseLeave={handleHoverLeave}
                    >
                        <div className={styles.listItemContent} style={{width: "100%", justifyContent: "space-between"}}
                        >
                            <div style={{display: "flex", alignItems: "center"}}>
                                <img
                                    className={styles.icon}
                                    src={hoveredOnCategory === "BLACKMODE" ? blackModeActive : blackMode}
                                    alt="Black mode"/>
                                <p>BLACK MODE</p>
                            </div>
                            <Switch isToggled={isToggled}
                                    onToggle={() => setIsToggled(!isToggled)}
                            />
                        </div>
                    </ListItem>
                    <ListItem className={classes.listItem}
                              style={{cursor: "pointer"}}
                              onMouseEnter={() => handleHover('LOGOUT')}
                              onMouseLeave={handleHoverLeave}
                    >
                        <div className={styles.listItemContent}
                        >
                            <img
                                className={styles.icon}
                                src={hoveredOnCategory === "LOGOUT" ? logoutActive : logout}
                                alt="LOGOUT"/>
                            <p>LOGOUT</p>
                        </div>
                    </ListItem>
                </List>
            </div>
        </>

    return (
        <>{menu}</>
    );
}


export default Menu;