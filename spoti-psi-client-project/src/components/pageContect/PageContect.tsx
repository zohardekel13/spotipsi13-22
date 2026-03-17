import ServerDataFetch from "../../serverDateFetch/serverDataFetch";
import useStyles from "./PageContectStyle";

const PageContect = () =>
{
    const {classes} = useStyles()
    return(
        <div className={classes.pageContectContainer}>
            <ServerDataFetch url="api/songs"></ServerDataFetch>
        </div>
    );
}

export default PageContect ;