import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";

import Enter from "./pages/Enter"
import About from './pages/About';
import Home from './pages/Home';
import Work from './pages/Work'

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Enter/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/work" element={<Work/>}/>

      </Routes>
        
        
    </Router>

   
    </>
  );
}

export default App;
