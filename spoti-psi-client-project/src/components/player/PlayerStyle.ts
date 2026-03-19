import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    playerDiv : {
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width : '100%',
        height : '8%',
        backgroundColor: '#2e2e2e'
    },
    playP:{
        fontSize:"25px",
        color:"white",
        fontWeight:"bold"
    }

}));
export default useStyles;