import React, { useRef, useState } from "react";
import { GameStatus } from "./common/types";
import ChartLine from "./components/Chart";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Home from "./pages/Home/Home";

function App() {
  const [gameStatus,setGameStatus] = useState<GameStatus>(GameStatus.GAME_RUN)
  const [reloadStats,setReloadStats] = useState<boolean>(false)
  return (
    <div className="App">
      <Header 
        setStatus ={setGameStatus}
        setReloadStats = {setReloadStats}
      />
      {
        gameStatus === GameStatus.GAME_RUN ?
          <Home
            setGameStatus={(val)=>setGameStatus(val)}
            reloadStats = {reloadStats} 
            setReloadStats = {setReloadStats}/> :
        <>
            <Stats />
          <div style={{width:'500px', height:'500px'}}>
            <ChartLine />
          </div>
        </>
      }
    </div>
  );
}

export default App;
