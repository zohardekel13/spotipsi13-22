import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    mainSectionDiv: {
        width: '100%',
        height: ' 80%',
        backgroundColor: '#181818',
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    }

}));
export default useStyles;