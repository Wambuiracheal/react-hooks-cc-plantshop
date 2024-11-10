import {useEffect,useState} from "react"
import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { Body } from "node-fetch";

function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
