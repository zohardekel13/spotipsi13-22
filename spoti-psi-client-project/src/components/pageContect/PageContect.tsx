import useStyles from "./PageContectStyle";
import useUrl from "../use_url/useUrl";
import AllSongsPage from "../all_songs_page/AllSongsPage";
import type { PageContectProps } from "../main_section/MainSection";
import { useMemo } from "react";
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

export interface useUrlProps<T>{
    currentPage : string,
    setSongsGlobal: React.Dispatch<React.SetStateAction<T[]>> 
}

/**
 * The function is a conponent, it gets all the page information by the url,
 * and creates a div of all the page contect by the url.
 * @returns - A div of all the page contect by the url.
 */
const PageContect = ({songsGlobal,setSongsGlobal, currentPage,favoirtesIds,setFavoritesIds} : PageContectProps) => {
    const { classes } = useStyles();
    
    const songsUseUrl: useUrlProps<Song> = {currentPage:"songs", setSongsGlobal};
    const {isLoading: isLoadingSongs, error: errorSongs } = useUrl(songsUseUrl);
    const favoriteUseUrl: useUrlProps<string> = {currentPage, setSongsGlobal: setFavoritesIds};
    const {isLoading: isLoadingFavorites, error:ErrorFavorites} = useUrl(favoriteUseUrl);

     
    const page_information: PageInformation = {
        songsList: songsGlobal,
        isLoading: isLoadingSongs,
        error: errorSongs
    }
        if (currentPage == "songs")
        {   
            return(
            <div className={classes.pageContectContainer}>
                <AllSongsPage songsList={page_information.songsList} isLoading={page_information.isLoading} error={page_information.error} color="white"></AllSongsPage>
            </div>
            );
        }
        else if (currentPage == "favorites")
        {
            console.log("Global Songs:", songsGlobal);
            console.log("Favorite IDs:", favoirtesIds);
            const filtredArray = songsGlobal.filter((song) => 
                favoirtesIds.map(String).includes(String(song.id)));
            console.log("Filtered Array:", filtredArray);
            return(
                <div className={classes.pageContectContainer}>
                <AllSongsPage songsList={filtredArray} isLoading={isLoadingFavorites} error={ErrorFavorites} color="#33006F"></AllSongsPage>
            </div>)
        }
        else
            return(
                <div>

                </div>
            );
        }


export default PageContect;