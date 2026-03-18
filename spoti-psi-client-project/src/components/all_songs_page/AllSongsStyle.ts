import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    songContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid white",
        width: "100%",
        height: "2%"
    },
    arrow: {
        color: "purple",
        width: "15%",
        height: "100%"
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
        width: "20%",
        height: "100%"
    },
    plus: {
        color: "white",
        width: "10%",
        height: "100%"
    },
    heart: {
        color: "white",
        width: "10%",
        height: "100%"
    }

}));

export default useStyles;