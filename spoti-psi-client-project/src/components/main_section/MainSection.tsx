import useStyles from "./MainSectionStyle";
import Sidebar from "../sideBar/SideBar";
import PageContect from "../pageContect/PageContect";
import type {Song, SongsPageProps}  from "../../App";

export interface PageContectProps {
    songsGlobal : Song[],
    setSongsGlobal :  React.Dispatch<React.SetStateAction<Song[]>>,
    currentPage : string,
    favoirtesIds: string[],
    setFavoritesIds:  React.Dispatch<React.SetStateAction<string[]>>
    

}


const MainSection = ({songsGlobal, setSongsGlobal, currentPage, setCurrentPage,favoirtesIds,setFavoritesIds}: SongsPageProps) => {
    const {classes} = useStyles();

    const currentPageContectProps : PageContectProps = {songsGlobal, setSongsGlobal, currentPage,favoirtesIds,setFavoritesIds};
    
    return(
        
        <div className={classes.mainSectionDiv}>
            <PageContect songsGlobal={currentPageContectProps.songsGlobal} setSongsGlobal={currentPageContectProps.setSongsGlobal}
             currentPage={currentPageContectProps.currentPage} favoirtesIds={currentPageContectProps.favoirtesIds}
             setFavoritesIds={currentPageContectProps.setFavoritesIds}></PageContect>
            <Sidebar setCurrentPage={setCurrentPage}></Sidebar>
        </div>
    )
}
export default MainSection;
