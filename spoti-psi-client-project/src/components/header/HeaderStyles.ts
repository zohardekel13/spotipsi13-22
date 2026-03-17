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
        backgroundColor: '#383838'
    },
    heading:{
        paddingRight:"20%",
        color:"#33006F",
        fontWeight:"bold",
        fontSize:"200%"
    }

}));


export default useStyles;