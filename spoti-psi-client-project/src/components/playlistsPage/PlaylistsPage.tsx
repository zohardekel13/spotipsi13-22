import { List, ListItem, ListItemText,Typography } from "@mui/material";
import useStyles from "./playlistPageStyle";
import type { Playlist } from "../../App";



export interface PlaylistPageProps{
    playlists: Playlist[],
    isLoading: boolean,
    error: string
}


const PlaylistPage = ({playlists,isLoading,error}:PlaylistPageProps) =>{
    const {classes} = useStyles();
    return (
        <div>
            {/* הצגת טקסט טעינה במידה והמידע עדיין נטען */}
            {isLoading && <p>Loading...</p>}

            {/* הצגת שגיאה בגישה לשרת במידה ויש */}
            {error && <p>{error}</p>}

            {/* הצגת השירים במידה והטעינה הסתיימה ואין שגיאה */}
            <h1 className={classes.h1}>הפלייליסטים שלי</h1>
            <List>
                {!isLoading && !error && playlists.map((playlist) => (
                    <ListItem key={playlist.id} className={classes.listItem}>
                        <Typography className={classes.playlistName}>{playlist.name}</Typography>
                        <Typography className={classes.playlistSize}>{playlist.songs.length} songs</Typography>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default PlaylistPage;