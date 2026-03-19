import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    h1:{
        color:"white",
        float: "right"
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