import useStyles from "./MainSectionStyle";
import Sidebar from "../sideBar/SideBar";
import PageContect from "../pageContect/PageContect";
const MainSection = () => {
    const {classes} = useStyles()
    return(
        <div className={classes.mainSectionDiv}>
            <PageContect></PageContect>
            <Sidebar></Sidebar>
        </div>
    )
}
export default MainSection;