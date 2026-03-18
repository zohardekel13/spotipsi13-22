import useStyles from "./MainSectionStyle";
import Sidebar from "../sideBar/SideBar";
import PageContect from "../pageContect/PageContect";
import type {Song, SongsPageProps}  from "../../App";

export interface PageContectProps {
    songsGlobal : Song[],
    setSongsGlobal :  React.Dispatch<React.SetStateAction<Song[]>>,
    currentPage : string
}


const MainSection = ({songsGlobal, setSongsGlobal, currentPage, setCurrentPage}: SongsPageProps) => {
    const {classes} = useStyles();

    const currentPageContectProps : PageContectProps = {songsGlobal, setSongsGlobal, currentPage};
    
    return(
        
        <div className={classes.mainSectionDiv}>
            <PageContect songsGlobal={currentPageContectProps.songsGlobal} setSongsGlobal={currentPageContectProps.setSongsGlobal} currentPage={currentPageContectProps.currentPage}></PageContect>
            <Sidebar setCurrentPage={setCurrentPage}></Sidebar>
        </div>
    )
}
export default MainSection;
