import React, { useRef, useState } from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Home from "./pages/Home/Home";

function App() {
  const [gameStatus,setGameStatus] = useState<string>('game') // game | statistics
  return (
    <div className="App">
      <Header />
      {
        gameStatus === 'game' ? <Home setGameStatus={(val)=>setGameStatus(val)}/> : <Stats />
      }
    </div>
  );
}

export default App;
