import React, { useEffect } from 'react'
import { useState } from 'react';



interface Song{
    id:string,
    name:string,
    artist:string,
    album:string
}
interface Url{
    url : string
}
/**
 * The function is a custom hook,
 * it gets a url type and fetch all the songs by the url, from the server.
 * @param param - A url object with the url name.
 * @returns - The song list, is loading and error parameters.
 */
const useUrl = ({url} : Url) => {
    const [songsList, setSongsList] = React.useState<Song[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>('');
    
    // יצירת פונקציה אסינכרונית לשליפה שירים והשמתם בסטייט
    const fetchSongs = async () => {
        // הגדרת התחלת טעינה של שירים
        setIsLoading(true);
        try {
            // גישה לשרת
            const response = await fetch(`http://127.0.0.1:5001/api/${url}`);
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


    return {songsList, isLoading, error};
}

export default useUrl;