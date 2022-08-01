import "./App.css";
import Welcome from "./pages/Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoodSelector from "./pages/MoodSelector";
import WordPage from "./pages/WordPage";
import QuotePage from "./pages/QuotePage";
import FactPage from "./pages/FactPage";
import ArticlePage from "./pages/ArticlePage";
import FortunePage from "./pages/FortunePage";

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
            {/*Word Page */}
            <Route path="/start" element={<WordPage />}></Route>
            {/*Quote Page */}
            <Route path="/quote" element={<QuotePage />}></Route>
            {/*Fact Page */}
            <Route path="/fact" element={<FactPage />}></Route>
            {/*Article Page */}
            <Route path="/article" element={<ArticlePage />}></Route>
            {/*Fortune Page */}
            <Route path="/fortune" element={<FortunePage />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
