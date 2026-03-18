import { useState } from "react";
import Header from "./components/header/Header";
import MainSection from "./components/main_section/MainSection";
import Player from "./components/player/Player";



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
