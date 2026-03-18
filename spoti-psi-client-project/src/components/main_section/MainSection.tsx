import useStyles from "./MainSectionStyle";
import Sidebar from "../sideBar/SideBar";
import PageContect from "../pageContect/PageContect";
const MainSection = ({setPageContect}: { setPageContect: (pageName: string) => void }) => {
    const {classes} = useStyles()
    return(
        <div className={classes.mainSectionDiv}>
            <PageContect></PageContect>
            <Sidebar setPageContect={setPageContect}></Sidebar>
        </div>
    )
}
export default MainSection;