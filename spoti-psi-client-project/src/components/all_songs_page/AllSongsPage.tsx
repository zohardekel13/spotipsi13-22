<<<<<<< HEAD

import { Add, FavoriteBorder, PlayArrow } from "@mui/icons-material"
=======
>>>>>>> 0f25a3babcf28ec91d2512457ac02218234e3b0e
import useStyles from "./AllSongsStyle";
import SongsTable from "../songs_table/SongsTable";

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
    setFavoritesIds: React.Dispatch<React.SetStateAction<string[]>>
}  

/**
 * The function all songs page is a component, it gets the page information,
 * and creates the div.
 * @param param - The page information of the allSongsPage.
 * @returns - The div of the AllSongsPage component.
 */
const AllSongsPage = ({ songsList, isLoading, error, favoirtesIds, setFavoritesIds}: PageInformation) => {

    const { classes } = useStyles();
    return (
        <div>
            <h1 className={classes.title}>כל השירים</h1>
            <SongsTable songsList = {songsList} isLoading= {isLoading} error= {error} favoirtesIds={favoirtesIds} setFavoritesIds={setFavoritesIds} />
        </div>
    )

}
export default AllSongsPage;