import Header from "./components/header/Header";
import MainSection from "./components/main_section/MainSection";
import Player from "./components/player/Player";
import { useState } from "react";
export interface Song{
    id:string,
    name:string,
    artist:string,
    album:string
}

/**
 * creates the App from:
 * Header componenet: represents the headline part
 * MainSection componenet: represents the main section - the contect and the side bar
 * player component: represent the down part of the page
 * @returns the App components
 */


export interface SongsPageProps {
    songsGlobal : Song[],
    setSongsGlobal :  React.Dispatch<React.SetStateAction<Song[]>>,
    currentPage : string,
    setCurrentPage :  React.Dispatch<React.SetStateAction<string>>
}
    
const App = () => {
  //global array of songs, followed by state
  const [songsGlobal,setSongsGlobal] = useState<Song[]>([]);

  //the currentPage followed by state
  const [currentPage,setCurrentPage] = useState<string>("");
  
  const currentSongsProps : SongsPageProps = {songsGlobal, setSongsGlobal, currentPage, setCurrentPage}
  return(
    <div className="mainDiv">
       <Header></Header>
       <MainSection songsGlobal={currentSongsProps.songsGlobal} setSongsGlobal={currentSongsProps.setSongsGlobal} currentPage={currentSongsProps.currentPage} setCurrentPage={currentSongsProps.setCurrentPage} ></MainSection>
       <Player></Player>

    </div>
   
  )

}
export default App;


