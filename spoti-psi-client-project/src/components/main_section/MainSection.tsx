import useStyles from "./MainSectionStyle";
import Sidebar from "../sideBar/SideBar";
import PageContect from "../pageContect/PageContect";
import type {Song, SongsPageProps,Playlist}  from "../../App";

export interface PageContectProps {
    songsGlobal : Song[],
    setSongsGlobal :  React.Dispatch<React.SetStateAction<Song[]>>,
    currentPage : string,
    favoirtesIds: string[],
    setFavoritesIds: React.Dispatch<React.SetStateAction<string[]>>
    playlists: Playlist[],
    setPlaylists: React.Dispatch<React.SetStateAction<Playlist[]>>
    
}


const MainSection = ({songsGlobal, setSongsGlobal, currentPage, setCurrentPage,favoirtesIds,setFavoritesIds,playlists,setPlaylists}: SongsPageProps) => {
    const {classes} = useStyles();

    const currentPageContectProps : PageContectProps = {songsGlobal, setSongsGlobal, currentPage,favoirtesIds,setFavoritesIds,playlists,setPlaylists};
    
    return(
        
        <div className={classes.mainSectionDiv}>
            <PageContect songsGlobal={currentPageContectProps.songsGlobal} setSongsGlobal={currentPageContectProps.setSongsGlobal}
             currentPage={currentPageContectProps.currentPage} favoirtesIds={currentPageContectProps.favoirtesIds} 
             setFavoritesIds={currentPageContectProps.setFavoritesIds} playlists={currentPageContectProps.playlists}
                setPlaylists={currentPageContectProps.setPlaylists}></PageContect>
            <Sidebar setCurrentPage={setCurrentPage}></Sidebar>
        </div>
    )
}
export default MainSection;
