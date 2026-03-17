import useStyles from "./HeaderStyles";


const Header = () =>{
    const {classes} = useStyles()
    return (
        <div className={classes.headerDiv}>
            <h2 className={classes.heading}>spotipsi</h2>
        </div>
    )
}
export default Header;