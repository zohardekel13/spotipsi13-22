import useStyles from "./PageContectStyle";
import useUrl from "../use_url/useUrl";
import AllSongsPage from "../all_songs_page/AllSongsPage";
import type { PageContectProps } from "../main_section/MainSection";
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
    
    const songsUseUrl: useUrlProps<Song> = {currentPage, setSongsGlobal};
    const {isLoading: isLoadingSongs, error: errorSongs } = useUrl(songsUseUrl);
    //  const favoriteUseUrl: useUrlProps<number> = {currentPage, setSongsGlobal: setFavoritesIds};
    //  const {isLoading: isLoadingFavorites, error:ErrorFavorites} = useUrl(favoriteUseUrl);
    
    

    const page_information: PageInformation = {
        songsList: songsGlobal,
        isLoading: isLoadingSongs,
        error: errorSongs
    }
        if (currentPage == "songs")
        {   
            return(
            <div className={classes.pageContectContainer}>
                <AllSongsPage songsList={page_information.songsList} isLoading={page_information.isLoading} error={page_information.error}></AllSongsPage>
            </div>
            );
        }
        else if (currentPage == "favorites")
        {
            return(
                <div>

                </div>)

        }
        else
            return(
                <div>

                </div>
            );
        }


export default PageContect;