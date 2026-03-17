import { useEffect, useState } from "react";
import useStyles from "./serverDataFetchStyle";
import { Add, FavoriteBorder, PlayArrow } from "@mui/icons-material";


export interface Song{
    id:string,
    name:string,
    artist:string,
    album:string
}

const ServerDataFetch = ({url}:{url:string}) => {
    const [songsList, setSongsList] = useState<Song[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>();
    const {classes} = useStyles()

    // יצירת פונקציה אסינכרונית לשליפה שירים והשמתם בסטייט
    const fetchSongs = async () => {
        // הגדרת התחלת טעינה של שירים
        setIsLoading(true);
        try {
            // גישה לשרת
            const response = await fetch(`http://127.0.0.1:5001/${url}`);
            const data = await response.json();

            // הוספת שירים לסטייט לאחר שהתקבלו מהשרת
            setSongsList(data);
        } catch (error) {
            // הגדרת שגיאה בגישה לשרת
            setError("Something went wrong");
            console.error(error);
            return;
        } finally {
            // הגדרת סוף הטעינה של שירים
            setIsLoading(false);
        }
    };

    // קריאה לשירים מהשרת רק בעלייה ראשונה של הקומפוננטה
    // תזכורת: כאשר נקרא ל-useEffect עם סוגריים ריקים זה אומר שהקוד ירוץ
    // רק ברנדור הראשון של הקומפוננטה
    useEffect(() => {
        fetchSongs();
    }, []);

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
    );
};

export default ServerDataFetch;