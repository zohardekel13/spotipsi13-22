import useStyles from "./PageContectStyle";
import useUrl from "../use_url/useUrl";
import AllSongsPage from "../all_songs_page/AllSongsPage";
import type { SongsPageProps } from "../../App";
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

export interface useUrlProps {
    currentPage : string,
    setSongsGlobal: React.Dispatch<React.SetStateAction<Song[]>>
}

/**
 * The function is a conponent, it gets all the page information by the url,
 * and creates a div of all the page contect by the url.
 * @returns - A div of all the page contect by the url.
 */
const PageContect = ({songsGlobal,setSongsGlobal, currentPage} : PageContectProps) => {
    const { classes } = useStyles();
    
    const currentUseUrl: useUrlProps = {currentPage, setSongsGlobal};
    const {isLoading, error } = useUrl(currentUseUrl);
    

    const page_information: PageInformation = {
        songsList: songsGlobal,
        isLoading: isLoading,
        error: error
    }
        {if (currentPage == "songs")
        {   
            return(
            <div className={classes.pageContectContainer}>
                <AllSongsPage songsList={page_information.songsList} isLoading={page_information.isLoading} error={page_information.error}></AllSongsPage>
            </div>
            );
        }
        else
            return(
                <div>

                </div>
            );
        }
}

export default PageContect;