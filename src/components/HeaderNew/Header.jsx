import React, {useEffect, useState} from 'react';
import Hamburger from 'hamburger-react'
import cx from 'classnames'
import Logo from "./Logo/Logo";
import Avatar from "./Customer/Avatar/Avatar";
import customer from '../../assets/icons/customer.svg'
import Menu from "./Menu/Menu";
import useWindowSize from "../../hooks/useWindowSize";
import constants from "../../constants/constants";
import DistributionBtns from "./DistributionBtns/DistributionBtns";
import Customer from "./Customer/Customer";
import Language from "./Language/Language";
import DrawerMenu from "../Drawer/Drawer"

import styles from './Header.module.scss'

function Header({commonClass}) {
    const [isOpen, setOpen] = useState(false)
    const [isDesktop,setIsDesktop] = useState();
    const {width} = useWindowSize()

    useEffect(() => {
        setIsDesktop(width >= constants.WINDOW_DESKTOP_SIZE)
    },[width])

    const cxHeader = cx(styles.header,{[commonClass]: commonClass})

    let header;

    !isDesktop
        ?
     header =  <>
         <div className={styles.header}>
             <Hamburger toggled={isOpen}
                        toggle={setOpen}
                        size={20}
                        color="#51525C"
                        direction="right"
             />
             <Logo isOpen={isOpen}/>
             <Avatar avatar={customer} isOpen={isOpen}/>
         </div>
         <Menu isOpen={isOpen}/>
     </>
        :
        header = <>
            <div className={cxHeader}>
                <Logo/>
                <DistributionBtns/>
                <div style={{display: "flex", alignItems: "center"}}>
                    <Language/>
                    <Customer name="william" lvl="7 LVL"/>
                </div>
                <DrawerMenu />
            </div>
        </>

    return (
        <>
            {header}
        </>
    );
}

export default Header;