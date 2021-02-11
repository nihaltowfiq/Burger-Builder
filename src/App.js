import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Router>
        <Main />
      </Router>
    </div>
  );
}

export default App;
