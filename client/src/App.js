import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Collection from "../src/components/Collection";
import Categories from "../src/components/Categories";
import Hero from "../src/components/Hero";
import OurStore from "./components/OurStore";

function App() {
  return (
    <div className="app">
      <div className="header_hero">
        <Header />
        <Hero />
      </div>
      <Categories />
      <Collection />
      <OurStore />
    </div>
  );
}

export default App;
