import "./App.css";
import Welcome from "./pages/Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import NavB from "./components/NavB";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="mt-28">
          <Welcome />
          <div className=" mt-40">
            <Button />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
