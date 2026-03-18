import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    sidebarContainer:{
        display:"flex",
        flexDirection:"column",
        width:"15%",
        height:"98%",
        borderLeft: '1px solid grey'

    },
    menuItem:{
        width:"100%",
        height:"10%",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent: 'space-evenly',
        gap:"4%",
        cursor: 'pointer',
        '&:hover': {
            backgroundColor:"#33006F"
        },
        '&:active': {
            backgroundColor:"purple"
        }
    },
    menuText:{
        color:"white",
        fontSize:"18px"
    },
    menuIcon:{
        color:"white"
    }
}))

export default useStyles;