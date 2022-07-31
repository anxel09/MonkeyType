import React, { useRef, useState } from "react";
import ChartLine from "./components/Chart";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Home from "./pages/Home/Home";

function App() {
  const [gameStatus,setGameStatus] = useState<string>('game') // game | statistics
  return (
    <div className="App">
      <Header />
      {
        gameStatus === 'game' ? <Home setGameStatus={(val)=>setGameStatus(val)}/> :
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
