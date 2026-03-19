
import { Add, Favorite,FavoriteBorder, PlayArrow } from "@mui/icons-material";
import useStyles from "./SongsTableStyle";
import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import {ListItemIcon} from "@mui/material";
import type { PageInformation } from "../all_songs_page/AllSongsPage";
import type { Song } from "../../App";




const SongsTable = ({ songsList, isLoading, error, favoirtesIds, setFavoritesIds, playerProps}: PageInformation) => {

    const { classes } = useStyles();

    

    const  removeFromFavorites = async(songId: string) => {
        try {
            // גישה לשרת
            
            const response = await fetch(`http://127.0.0.1:5001/api/favorites/remove`, {method: 'POST',  headers: { 'Content-type': 'application/json; charset=UTF-8',}, body: JSON.stringify({'songId': songId})});
            const data = await response.json();

            setFavoritesIds(data);

        } catch (error) {
            // הגדרת שגיאה בגישה לשרת
            console.log("Something went wrong");
            console.error(error);
            return;
    }
    
}
 const addToFavorites = async(songId: string) => {
        try {
            // גישה לשרת
            
            const response = await fetch(`http://127.0.0.1:5001/api/favorites/add`, {method: 'POST',  headers: { 'Content-type': 'application/json; charset=UTF-8',}, body: JSON.stringify({'songId': songId})});
            const data = await response.json();

            setFavoritesIds(data);
            
        } catch (error) {
            // הגדרת שגיאה בגישה לשרת
            console.log("Something went wrong");
            console.error(error);
            return;
    }
    
}
    const pickedSong = ( song : Song ) => {
        playerProps.setQueue([...playerProps.queue, song]);
        playerProps.setCurrentSong(song);
        playerProps.setIsPlaying(true);
    }
    return (
        <div>
            {/* הצגת טקסט טעינה במידה והמידע עדיין נטען */}
            {isLoading && <p>Loading...</p>}

            {/* הצגת שגיאה בגישה לשרת במידה ויש */}
            {error && <p>{error}</p>}

            {/* הצגת השירים במידה והטעינה הסתיימה ואין שגיאה */}
            <List>
                {!isLoading && !error && songsList.map((song) => (
                    <ListItem key={song.id} className={classes.listItem} onClick={() => pickedSong(song)}>
                        <PlayArrow className={classes.arrow}></PlayArrow>
                        <ListItemText className={classes.songName}>{song.name}</ListItemText>
                        <ListItemIcon className={classes.leftRight}>
                             <IconButton>
                                
                                <Add className={classes.leftIcons}sx={{color:"white"}} ></Add>

                                
                                {favoirtesIds.includes(song.id) ? (
                                <Favorite sx={{color:'purple'}} className={classes.leftIcons} onClick={() => removeFromFavorites(song.id)}></Favorite> ):
                                 (<FavoriteBorder  sx={{color:'white'}}className={classes.leftIcons} onClick={() => addToFavorites(song.id)}></FavoriteBorder>)}
                            </IconButton>
                        </ListItemIcon>  
        
                    </ListItem>
                ))}
            </List>



           
        </div>
    )
    

}
export default SongsTable;