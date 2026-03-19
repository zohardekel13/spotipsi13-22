import SongsTable from "../songs_table/SongsTable"
import type { PageInformation } from "../all_songs_page/AllSongsPage" 
import useStyles from "./FavoritePageStyle"

const FavoritesPage  = ({ songsList, isLoading, error, favoirtesIds, setFavoritesIds}: PageInformation) => {
    const {classes} = useStyles();
    return (
        <div>
            <h1 className={classes.title}>המועדפים שלי</h1>
            <SongsTable songsList = {songsList} isLoading= {isLoading} error= {error} favoirtesIds = {favoirtesIds} setFavoritesIds={setFavoritesIds}/>
        </div>
    )
}
export default FavoritesPage;