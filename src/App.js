import React from "react";
import "./App.css";
import ListCountries from "./components/ListCountries";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Countries Stats</h1>
      </header>
      <main>
        <ListCountries />
      </main>
    </div>
  );
}

export default App;
