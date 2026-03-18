import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    sidebarContainer:{
        display:"flex",
        flexDirection:"column",
        width:"13%",
        height:"30%",
        backgroundColor:"black",
        border:"1px solid white"

    },
    menuItem:{
        width:"100%",
        height:"33%",
        display:"flex",
        flexDirection:"row-reverse",
        backgroundColor:"black",
        alignItems:"center",
        border:"1px solid white",
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