import useStyles from "./PageContectStyle";
import useUrl from "../use_url/useUrl";
import AllSongsPage from "../all_songs_page/AllSongsPage";
import type { PageContectProps } from "../main_section/MainSection";
import FavoritesPage from "../favorites_page/FavoritesPage";
import type { Song,Playlist } from "../../App";
import type { useUrlProps } from "../use_url/useUrl";
import PlaylistPage from "../playlistsPage/PlaylistsPage";

interface PageInformation {
    songsList: Song[],
    isLoading: boolean,
    error: string
}



/**
 * The function is a conponent, it gets all the page information by the url,
 * and creates a div of all the page contect by the url.
 * @returns - A div of all the page contect by the url.
 */

    const PageContect = ({songsGlobal,setSongsGlobal, currentPage,favoirtesIds,setFavoritesIds,playlists,setPlaylists, playerProps} : PageContectProps) => {
    const { classes } = useStyles();
    
    const songsUseUrl: useUrlProps<Song> = {currentPage:"songs", setSongsGlobal};
    const {isLoading: isLoadingSongs, error: errorSongs } = useUrl(songsUseUrl);
    
    const favoriteUseUrl: useUrlProps<string> = {currentPage: "favorites", setSongsGlobal: setFavoritesIds};
    const {isLoading: isLoadingFavorites, error:ErrorFavorites} = useUrl(favoriteUseUrl);
    
    const playlistUseUrl: useUrlProps<Playlist> = {currentPage:"playlists", setSongsGlobal:setPlaylists}
    const {isLoading: isLoadingPlaylists, error:ErrorPlaylists} = useUrl(playlistUseUrl);

    const page_information: PageInformation = {
        songsList: songsGlobal,
        isLoading: isLoadingSongs,
        error: errorSongs
    }
        if (currentPage == "songs")
        {   console.log(favoirtesIds)
            return(
            <div className={classes.pageContectContainer}>
                <AllSongsPage songsList={page_information.songsList} isLoading={page_information.isLoading} error={page_information.error} favoirtesIds={favoirtesIds} setFavoritesIds={setFavoritesIds} playerProps={playerProps}></AllSongsPage>
            </div>
            );
        }
        else if (currentPage == "favorites")
        {
            console.log("Global Songs:", songsGlobal);
            console.log("Favorite IDs:", favoirtesIds);
            const filtredArray = songsGlobal.filter((song) => 
                favoirtesIds.map(String).includes(String(song.id)));
            console.log(favoirtesIds)
            console.log("Filtered Array:", filtredArray);
            return(
                <div className={classes.pageContectContainer}>
                <FavoritesPage songsList={filtredArray} isLoading={isLoadingFavorites} error={ErrorFavorites} favoirtesIds={favoirtesIds} setFavoritesIds={setFavoritesIds} playerProps={playerProps}></FavoritesPage>
            </div>)
        }
        else if (currentPage == "playlists")
        {
            console.log("playlists :", playlists);
            console.log(isLoadingPlaylists);
            console.log(ErrorPlaylists);
            return(
                <div className={classes.pageContectContainer}>
                    <PlaylistPage playlists={playlists} isLoading={isLoadingPlaylists} error={ErrorPlaylists}></PlaylistPage>
                </div>
            );
        }
        else{
            return(
                <div>

                </div>
            );
        }
        }


export default PageContect;