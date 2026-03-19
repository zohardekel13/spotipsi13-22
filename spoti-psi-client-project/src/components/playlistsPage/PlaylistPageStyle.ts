import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    header:{
        display:"flex",
        flexDirection:"row-reverse",
        justifyContent:"space-between",
        padding:"5px"
    },
    h1:{
        color:"white",
        float: "right",
        fontSize:"1.5rem",
        fontWeight:"bold"
    },
    listItem:{
        display: "flex",
        flexDirection: "column",
        justifyContect: "flex-start",
        alignItems:"flex-start",
        borderTop:"1px solid white",
        borderBottom:"1px solid white",
        width: "100%",
        height: "2%",
        color:"white",
        '&:hover':{
            backgroundColor: "#2e2e2e"
         }
    },

    btn:{
        backgroundColor:"black",
        border:"1px solid #2e2e2e",
        borderRadius:"20%",
        color:"#7633c3"
    },
    playlistName:{
        fontSize:"1.5rem",
        fontWeight:"bold",
        color:"white"
    },
    playlistSize:{
        color:"white",
        fontSize:"1.0rem"
    }
}));

export default useStyles