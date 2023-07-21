import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Header } from "./Layout";
import Home from "./Pages/Home";
import './styles/app.scss'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home />} />
      </Routes>
      
    </Router>
  );
}

export default App;
