
import { Add, FavoriteBorder, PlayArrow } from "@mui/icons-material";
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
    error: string
}

const SongsTable = ({ songsList, isLoading, error }: PageInformation) => {

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
                    <ListItem className={classes.listItem}>
                        <PlayArrow className={classes.arrow}></PlayArrow>
                        <ListItemText className={classes.songName}>{song.name}</ListItemText>
                        <ListItemIcon className={classes.leftRight}>
                             <IconButton>
                                <Add className={classes.leftIcons}></Add>
                                <FavoriteBorder className={classes.leftIcons}></FavoriteBorder>
                            </IconButton>
                        </ListItemIcon>          
                    </ListItem>
                ))}
            </List>



           
        </div>
    )
    

}
export default SongsTable;