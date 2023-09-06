import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/NavBar";
import { Button, Grid, GridItem, Show,  } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Grid
       
        templateAreas={
      //     {
      //     base: `"nav" "main"` ,
      //     lg : `"nav nav" "aside main"`,
      // }}
        
      //   templateColumns={{
      //     base: '1fr',
      //     lg: '70vw 1fr',
      //   }}

        `"nav nav"
        "aside main"
         "aside main"`}
        gridTemplateRows={'5rem 1fr 20rem'}
        // gridTemplateColumns={''}
        w={'100vw'}
        gap={'1px'}
      >
        <GridItem   area={"nav"}>
          
          <NavBar />
        </GridItem>
        
        <GridItem   area={"aside"}>
          Aside 
        </GridItem>
        
        <GridItem   area={"main"}>
          <GameGrid/>
        </GridItem>
      </Grid>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    
    </>
  );
}

export default App;