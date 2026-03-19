import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    pageContectContainer:{
        width:"85%",
        height:"100%",
        display:"flex",
        flexDirection:"column",
        alignContent:"flex-start",
        overflowY:"auto",
        "&::-webkit-scrollbar":{
        width: "10px",
        height:"5px"
        },
        "&::-webkit-scrollbar-track":{
            background:"black",
        },
        "::-webkit-scrollbar-thumb" :{
            background:"#7633c3",
            borderRadius: "20%",
            backgroundClip: "content-box"
        },
        "::-webkit-scrollbar-thumb:hover": {
            background: "purple",
        }
}
}
))

export default useStyles;