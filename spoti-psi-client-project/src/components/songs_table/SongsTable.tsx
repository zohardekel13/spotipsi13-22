
import { Add, Favorite,FavoriteBorder, PlayArrow } from "@mui/icons-material";
import useStyles from "./SongsTableStyle";
import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import {ListItemIcon} from "@mui/material";

interface Song {
    id: string,
    name: string,
    artist: string,
    album: string
}

interface PageInformation {
    songsList: Song[],
    isLoading: boolean,
    error: string,
    color: string
}

const SongsTable = ({ songsList, isLoading, error,color}: PageInformation) => {

    const { classes } = useStyles();

    
    return (
        <div>
            {/* הצגת טקסט טעינה במידה והמידע עדיין נטען */}
            {isLoading && <p>Loading...</p>}

            {/* הצגת שגיאה בגישה לשרת במידה ויש */}
            {error && <p>{error}</p>}

            {/* הצגת השירים במידה והטעינה הסתיימה ואין שגיאה */}
            <List>
                {!isLoading && !error && songsList.map((song) => (
                    <ListItem key={song.id} className={classes.listItem}>
                        <PlayArrow className={classes.arrow}></PlayArrow>
                        <ListItemText className={classes.songName}>{song.name}</ListItemText>
                        <ListItemIcon className={classes.leftRight}>
                             <IconButton>
                                <Add className={classes.leftIcons}sx={{color:"white"}} ></Add>
                                {color !== "white" ? (
                                <Favorite sx={{color:color}}className={classes.leftIcons}></Favorite> ):
                                 (<FavoriteBorder  sx={{color:color}}className={classes.leftIcons}></FavoriteBorder>)}
                            </IconButton>
                        </ListItemIcon>          
                    </ListItem>
                ))}
            </List>



           
        </div>
    )
    

}
export default SongsTable;