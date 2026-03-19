import useStyles from "./sideBarStyle";
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { List , ListItemText, ListItem, ListItemIcon} from "@mui/material";

const Sidebar = ({setCurrentPage}:  { setCurrentPage :  React.Dispatch<React.SetStateAction<string>>}) => {
    /**
     * the sidebar Components creates the side bar, with 3 buttons - songs, plalist and favorites.
     * @param setPageContect - function that change the current page-name
     * for each button it set the page name to the button's page
     */
    const { classes } = useStyles();
    

    return (
        <List className={classes.sidebarContainer}>
            <ListItem className={classes.menuItem} onClick={()=> setCurrentPage("songs")}>
                <ListItemText className={classes.menuText}>כל השירים</ListItemText>
                <ListItemIcon>
                        <HomeIcon className={classes.menuIcon} />
                </ListItemIcon>
            </ListItem>

            <ListItem className={classes.menuItem} onClick={()=>setCurrentPage("playlists")}>
                <ListItemText className={classes.menuText}>פלייליסטים</ListItemText>
                <ListItemIcon>
                        <LibraryMusicIcon className={classes.menuIcon} />
                </ListItemIcon>
            </ListItem>

            <ListItem className={classes.menuItem} onClick={()=>setCurrentPage("favorites")}>
                <ListItemText className={classes.menuText}>מועדפים</ListItemText>
                <ListItemIcon>
                       <FavoriteIcon className={classes.menuIcon} />
                </ListItemIcon>
            </ListItem>


        </List>

  

    );
};

export default Sidebar;
