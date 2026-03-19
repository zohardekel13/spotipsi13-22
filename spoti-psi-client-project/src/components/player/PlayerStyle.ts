import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    playerDiv : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent : 'space-around',
        alignItems: 'center',
        width : '100%',
        height : '15%',
        backgroundColor: '#2e2e2e'
    },
    iconsDiv : {
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width : '100%',
        height : '15%',
        backgroundColor: '#2e2e2e'
    },
    playIcons : {
        color: 'white',
        fontSize: '30px',
        cursor: 'pointer'
    },
    songName : {
        color: 'white',
        fontSize: '25px',
        fontFamily: 'arial'
    },
    artistName: {
        color: 'white',
        fontSize: '15px',
        fontFamily: 'Georgia'
    }

}));
export default useStyles;