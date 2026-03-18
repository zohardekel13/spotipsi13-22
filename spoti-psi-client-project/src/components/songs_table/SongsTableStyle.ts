import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    listItem: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "2%",
        borderBottom: '1px solid grey',
        "&:hover":{
            backgroundColor: '#202020'
        },
        cursor: 'pointer',
        webkitScrollbar : {
            color: 'red'
        }
    },
    arrow: {
        color: "purple",
        size : 'small'
    },
    songName: {
        fontSize: "16px",
        color: "white",
        fontWeight: "bold"
    },
    leftRight: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        gap: "1%",
        height: "100%"
    },
    leftIcons: {
        color: "white",
        size : 'small'
    }

}));

export default useStyles;