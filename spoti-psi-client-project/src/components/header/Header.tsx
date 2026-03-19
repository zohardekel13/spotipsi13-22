import useStyles from "./HeaderStyles";
import MusicNote from '@mui/icons-material/MusicNote';


const Header = () =>{
    const {classes} = useStyles()
    return (
        <div className={classes.headerDiv}>
            <MusicNote className={classes.icon}/>
            <h2 className={classes.heading}>spotipsi</h2>
        </div>
    )
}
export default Header;