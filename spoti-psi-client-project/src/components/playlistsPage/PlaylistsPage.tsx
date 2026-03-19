import { Button, List, ListItem,Typography } from "@mui/material";
import React from "react";
import useStyles from "./PlaylistPageStyle";
import type { Playlist } from "../../App";
import DialogAddPlaylist from "../dialogAddPlaylist/DialogAddPlaylist";
import { useRef } from "react";



export interface PlaylistPageProps{
    playlists: Playlist[],
    isLoading: boolean,
    error: string
}

const PlaylistPage = ({playlists,isLoading,error}:PlaylistPageProps) =>{
    const {classes} = useStyles();
        const inputRef = useRef<HTMLInputElement>(null);
        const [open, setOpen] = React.useState(false);

        const handleClickOpen = () => {setOpen(true);};    
        const handleClose = () => {setOpen(false);};
        const handleAddPlaylistClick = () => {
            const playlistName = inputRef.current?.value.trim();
            setOpen(false);
            console.log(playlistName);
            return playlistName;
        }

    return (
        <div>
            {/* הצגת טקסט טעינה במידה והמידע עדיין נטען */}
            {isLoading && <p>Loading...</p>}

            {/* הצגת שגיאה בגישה לשרת במידה ויש */}
            {error && <p>{error}</p>}

            {/* הצגת השירים במידה והטעינה הסתיימה ואין שגיאה */}
            <div className={classes.header}>
                <Typography className={classes.h1}>הפלייליסטים שלי</Typography>
                <Button className={classes.btn} onClick={handleClickOpen}>הוסף פלייליסט</Button>
            </div>
            <DialogAddPlaylist open={open} handleClose={handleClose} 
                handleAddPlaylistClick={handleAddPlaylistClick} inputRef={inputRef}/>
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