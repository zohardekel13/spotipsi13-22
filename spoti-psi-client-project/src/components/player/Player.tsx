import useStyles from "./PlayerStyle";

const Player = () => {
    const {classes} = useStyles()
    return(
        <div className={classes.playerDiv}></div>
    )
}
export default Player;