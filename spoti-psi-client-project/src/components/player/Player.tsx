import useStyles from "./PlayerStyle";
import { PlayArrow, SkipNext, SkipPrevious } from "@mui/icons-material";
import sound from "../songs_table/songs/1.mp3"

const Player = ()  => {
    const {classes} = useStyles();

    const playSong = () => {
        new Audio(sound).play();
    }
    return(
        <div className={classes.playerDiv}>
            <div className={classes.iconsDiv}>
                <SkipPrevious className={classes.playIcons}></SkipPrevious>
                <PlayArrow className={classes.playIcons} onClick ={()  => playSong()}></PlayArrow>
                <SkipNext className={classes.playIcons}></SkipNext>
            </div>
        </div>
    )
}
export default Player;