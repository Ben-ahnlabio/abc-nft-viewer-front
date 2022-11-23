import React from "react";
import "./App.css";
import NftItem from "./components/NftItem";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <NftItem name={"nft Name"}></NftItem>
    </div>
  );
}

export default App;
