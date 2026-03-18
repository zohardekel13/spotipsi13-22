
import { Add, FavoriteBorder, PlayArrow } from "@mui/icons-material";
import useStyles from "./AllSongsStyle";

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

/**
 * The function all songs page is a component, it gets the page information,
 * and creates the div.
 * @param param - The page information of the allSongsPage.
 * @returns - The div of the AllSongsPage component.
 */
const AllSongsPage = ({ songsList, isLoading, error }: PageInformation) => {

    const { classes } = useStyles();
    return (
        <div>
            {/* הצגת טקסט טעינה במידה והמידע עדיין נטען */}
            {isLoading && <p>Loading...</p>}

            {/* הצגת שגיאה בגישה לשרת במידה ויש */}
            {error && <p>{error}</p>}

            {/* הצגת השירים במידה והטעינה הסתיימה ואין שגיאה */}
            {!isLoading && !error && songsList.map((song, index) => (
                <div className={classes.songContainer} key={index}>
                    <div className={classes.leftRight}>
                        <PlayArrow className={classes.arrow}></PlayArrow>
                        <h2 className={classes.songName}>{song.name}</h2>
                    </div>
                    <div className={classes.leftRight}>
                        <Add className={classes.plus}></Add>
                        <FavoriteBorder className={classes.heart}></FavoriteBorder>
                    </div>
                </div>
            ))}
        </div>
    )

}
export default AllSongsPage;