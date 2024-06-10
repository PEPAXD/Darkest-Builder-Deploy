import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Pages Components
import MainPage from "./pages/MainPage.jsx";
import WikiPage from "./pages/WikiPage.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Darkest-Builder-Deploy/" element={<MainPage />} />
          <Route path="/wiki/" element={<WikiPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
