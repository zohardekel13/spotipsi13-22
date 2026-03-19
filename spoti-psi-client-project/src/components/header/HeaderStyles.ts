import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    headerDiv: {
       display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width : '35%',
        height : '8%',
        paddingLeft: '65%',
        backgroundColor: '#2e2e2e'
    },
    heading:{
        paddingRight:"20%",
        color:"#7633c3",
        fontWeight:"bold",
        fontSize:"200%"
    },
    icon :{
        color:"#7633c3"
    }

}));


export default useStyles;