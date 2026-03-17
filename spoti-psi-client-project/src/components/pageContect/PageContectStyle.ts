import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    pageContectContainer:{
        width:"85%",
        height:"100%",
        border:"1px solid white",
        display:"flex",
        flexDirection:"column",
        alignContent:"flex-start",
        overflowY:"scroll"

    }
}))

export default useStyles;