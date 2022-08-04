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
import SignIn from "./pages/SignIn";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/Protected";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route
            path="/welcome"
            element={
              <Protected>
                {/*Welcome Page */}
                <Welcome />
              </Protected>
            }
          ></Route>
          {/*Mood Selector Page */}
          <Route
            path="/mood"
            element={
              <Protected>
                <MoodSelector />
              </Protected>
            }
          ></Route>
          {/*Word Page */}
          <Route
            path="/start"
            element={
              <Protected>
                <WordPage />
              </Protected>
            }
          ></Route>
          {/*Quote Page */}
          <Route
            path="/quote"
            element={
              <Protected>
                <QuotePage />
              </Protected>
            }
          ></Route>
          {/*Fact Page */}
          <Route
            path="/fact"
            element={
              <Protected>
                <FactPage />
              </Protected>
            }
          ></Route>
          {/*Article Page */}
          <Route
            path="/article"
            element={
              <Protected>
                <ArticlePage />
              </Protected>
            }
          ></Route>
          {/*Fortune Page */}
          <Route
            path="/fortune"
            element={
              <Protected>
                <FortunePage />
              </Protected>
            }
          ></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
