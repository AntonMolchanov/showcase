import React from 'react';
import {makeStyles} from "@mui/styles";
import DrawerMenu from "../../../Drawer/Drawer";


function Avatar({level, avatar, isOpen}) {
    const useStyles = makeStyles(generateStyles)
    const classes = useStyles()

    function generateStyles() {
        return {
            avatar: {
                background:
                    "-webkit-linear-gradient(268.93deg, #0D05BA 15.72%, rgba(13, 5, 186, 0) 91.59%)",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                margin: '2px',
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                transform: isOpen ? `translateY(-150%)` : 'translateY(0)',
                top: isOpen && '-40%',
                left: isOpen && '36.5vw',
                translateX: "calc(100% - 66.9px)",
                position: isOpen ? "absolute" : 'relative',
                transition: 'transform 0.3s ease-in-out',

                '&:after': {
                    left: "2px",
                    width: "32px",
                    position: "absolute",
                    border: "2px solid #f2f2f2",
                    height: "32px",
                    content: '""',
                    borderRadius: "32px",
                    backgroundColor: "transparent"
                },
                '&:before': {
                    top: "17px",
                    left: "7px",
                    width: "36px",
                    // border: "2px solid #E3E3E7",
                    borderWidth: "2.1px",
                    borderStyle: "solid",
                    borderColor: "#E3E3E7",
                    height: "18px",
                    position: "absolute",
                    borderBottom: "0",
                    borderTopLeftRadius: "36px",
                    borderTopRightRadius: "36px",
                    transform: "rotate(134.3deg)",
                    content: '""',
                    backgroundColor: "transparent"
                },

            },
            customerAvatar: {
                width: '32px',
                height: '32px'
            },
            menuTitle: {
                fontFamily: 'Gilroy',
                fontSize: "14px",
                lineHeight: '24px',
                color: '#51525C',
            },
            toggleWrapper: {
                position: "absolute",
                top: 0,
                left: 0,
                '@media (min-width: 1024px)' : {
                    display: 'none'
                }
            }
        }
    }

    return (
        isOpen
            ?
            <p className={classes.menuTitle}>Menu</p>
            :
                  <div className={classes.avatar}>
                      <img src={avatar} className={classes.customerAvatar} alt="Customer"/>
                      <div className={classes.toggleWrapper}>
                          <DrawerMenu />
                      </div>
                  </div>
    );
}

export default Avatar;