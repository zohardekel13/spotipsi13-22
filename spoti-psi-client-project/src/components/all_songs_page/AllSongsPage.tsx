import useStyles from "./AllSongsStyle";
import SongsTable from "../songs_table/SongsTable";
import type { PlayProps } from "../../App";
interface Song {
    id: string,
    name: string,
    artist: string,
    album: string
}

export interface PageInformation {
    songsList: Song[],
    isLoading: boolean,
    error: string,
    favoirtesIds: string[],
    setFavoritesIds: React.Dispatch<React.SetStateAction<string[]>>,
    playerProps : PlayProps
}  

/**
 * The function all songs page is a component, it gets the page information,
 * and creates the div.
 * @param param - The page information of the allSongsPage.
 * @returns - The div of the AllSongsPage component.
 */
const AllSongsPage = ({ songsList, isLoading, error, favoirtesIds, setFavoritesIds, playerProps}: PageInformation) => {

    const { classes } = useStyles();
    return (
        <div>
            <h1 className={classes.title}>כל השירים</h1>
            <SongsTable songsList = {songsList} isLoading= {isLoading} error= {error} favoirtesIds={favoirtesIds} setFavoritesIds={setFavoritesIds} playerProps={playerProps}/>
        </div>
    )

}
export default AllSongsPage;