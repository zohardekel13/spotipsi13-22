import useStyles from "./PageContectStyle";
import useUrl from "../../customs/use_url/useUrl";
import AllSongsPage from "../all_songs_page/AllSongsPage";

interface Url {
    url: string
}
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

interface PageContectProps {
    songs: Song[],
    setSongs: ((songs: Song[]) => void),
    currentPage: string
}

/**
 * The function is a conponent, it gets all the page information by the url,
 * and creates a div of all the page contect by the url.
 * @returns - A div of all the page contect by the url.
 */
const PageContect = ({songs,setSongs,currentPage}:PageContectProps) => {
    const { classes } = useStyles();

    const current_url: Url = { url: currentPage };
    const { songsList, isLoading, error } = useUrl(current_url);

    const page_information: PageInformation = {
        songsList: songsList,
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