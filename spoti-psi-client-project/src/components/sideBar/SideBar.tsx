import useStyles from "./sideBarStyle";
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Sidebar = ({setCurrentPage}:  { setCurrentPage :  React.Dispatch<React.SetStateAction<string>>}) => {
    /**
     * the sidebar Components creates the side bar, with 3 buttons - songs, plalist and favorites.
     * @param setPageContect - function that change the current page-name
     * for each button it set the page name to the button's page
     */
    const { classes } = useStyles();
    

    return (
        <div className={classes.sidebarContainer}>
            <div className={classes.menuItem} onClick={()=> setCurrentPage("songs")}>
                <HomeIcon className={classes.menuIcon} />
                <p className={classes.menuText}>כל השירים</p>
            </div>

            <div className={classes.menuItem} onClick={()=>setCurrentPage("playlists")}>
                <LibraryMusicIcon className={classes.menuIcon} />
                <p className={classes.menuText}>פלייליסטים</p>
            </div>

            <div className={classes.menuItem} onClick={()=>setCurrentPage("favorites")}>
                <FavoriteIcon className={classes.menuIcon} />
                <p className={classes.menuText}>מועדפים</p>
            </div>
        </div>
    );
};

export default Sidebar;
