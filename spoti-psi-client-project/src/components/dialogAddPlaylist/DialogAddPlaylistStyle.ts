import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    dialogContainer:{
        backgroundColor:"darkgray"
    },
    actionsContainer:{
        display:"flex",
        flexDirection:"column"
    },
    btnAdd:{
        color:"#7633c3"
    },
    btnBack:{
        color:"#2e2e2e"
    },
    input:{
       color:"#2e2e2e"
    }
}));


export default useStyles;