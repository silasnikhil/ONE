import "./App.css";
import Welcome from "./pages/Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import NavB from "./components/NavB";
import Button from "./components/Button";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoodSelector from "./pages/MoodSelector";
import FactPage from "./pages/FactPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className=" grad mt-0">
          <Routes>
            {/*Welcome Page */}
            <Route path="/" element={<Welcome />}></Route>
            <Route path="/welcome" element={<Welcome />}></Route>

            {/*Mood Selector Page */}
            <Route path="/mood" element={<MoodSelector />}></Route>

            {/*Facts Page */}
            <Route path="/start" element={<FactPage />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
