
export function generateStyles(isOpen) {
    return {
        menu: {
            transform: isOpen ? `translateX(0)` : 'translateX(-120%)',
            width: '100%',
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingBottom: '32px',
            position: "absolute",
            top: '98px',
            left: 0,
            transition: 'transform 0.3s ease-in-out',
            backgroundColor: "#ffffff",
            zIndex: '10',

            '@media (min-width:768px)':{
                paddingLeft: '40px',
                paddingRight: '40px',
            },

            '@media (min-width:1024px)':{
                position: "static",
                transform: `translateX(0)`,
                width: "215px"
            }
        },
        formControl: {
            width: '100%',
            marginBottom: '24px'
        },
        menuItem: {
            display: 'flex',
            alignItems: "center"
        },
        listItem: {
            paddingLeft: '0px',
            paddingRight: '0px',
            "&:not(:last-child)": {
                paddingBottom: '24px'
            }
        },
        accordion: {
            width: '100%',
            backgroundColor: 'transparent',
            paddingBottom: '0px',
            paddingTop: '0px'
        },
        accordionSummary: {
            paddingLeft: '0px',
            paddingRight: '0px',
            paddingTop: '0px',
            margin: '0px',
            maxHeight: '22px',
            backgroundColor: 'transparent',
        },
        accordionDetails: {
            padding: '0px 40px 16px'
        }
    }
}