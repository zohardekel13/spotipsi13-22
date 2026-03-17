import useStyles from "./PlayerStyle";

const Player = () => {
    const {classes} = useStyles()
    return(
        <div className={classes.playerDiv}>
            <p className={classes.playP}>נגן שירים</p>
        </div>
    )
}
export default Player;