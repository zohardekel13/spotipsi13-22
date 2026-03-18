import useStyles from "./AllSongsStyle";
import SongsTable from "../songs_table/SongsTable";

interface Song {
    id: string,
    name: string,
    artist: string,
    album: string
}

interface PageInformation {
    songsList: Song[],
    isLoading: boolean,
    error: string,
    color: string
}  

/**
 * The function all songs page is a component, it gets the page information,
 * and creates the div.
 * @param param - The page information of the allSongsPage.
 * @returns - The div of the AllSongsPage component.
 */
const AllSongsPage = ({ songsList, isLoading, error,color}: PageInformation) => {

    const { classes } = useStyles();
    return (
        <div>
            <h1 className={classes.title}>כל השירים</h1>
            <SongsTable songsList = {songsList} isLoading= {isLoading} error= {error} color={color}/>
        </div>
    )

}
export default AllSongsPage;