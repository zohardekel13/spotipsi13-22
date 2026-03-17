import useStyles from "./sideBarStyle";
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Sidebar = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.sidebarContainer}>
            <div className={classes.menuItem}>
                <HomeIcon className={classes.menuIcon} />
                <p className={classes.menuText}>כל השירים</p>
            </div>

            <div className={classes.menuItem}>
                <LibraryMusicIcon className={classes.menuIcon} />
                <p className={classes.menuText}>פלייליסטים</p>
            </div>

            <div className={classes.menuItem}>
                <FavoriteIcon className={classes.menuIcon} />
                <p className={classes.menuText}>מועדפים</p>
            </div>
        </div>
    );
};

export default Sidebar;
