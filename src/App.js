import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}/>
      </Routes>
    </div>
  );
}

export default App;
