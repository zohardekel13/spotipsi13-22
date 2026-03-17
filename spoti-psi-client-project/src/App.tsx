import Header from "./components/header/Header";
import MainSection from "./components/main_section/MainSection";
import Player from "./components/player/Player";

const App = () => {
  return(
    <div className="mainDiv">
       <Header></Header>
       <MainSection></MainSection>
       <Player></Player>

    </div>
   
  )

}
export default App;
