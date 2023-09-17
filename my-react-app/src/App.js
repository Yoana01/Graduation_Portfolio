import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { GlobalStyle } from "./components/styleCompnents/global.Style";
import Home from './components/home';
import About from './components/about';
// import Contact from './component/contact';
import {NavigationBar} from "./components/styleCompnents/container.Style";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
       <NavigationBar>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                {/* <Link to="/contact">Contact Us</Link> */}
      </NavigationBar>
        <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/about' element={< About />}></Route>
                {/* <Route exact path='/contact' element={< Contact />}></Route> */}
        </Routes>
    </Router>
    </div>
  );
}

export default App;
