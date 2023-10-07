import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { GlobalStyle } from "./components/styleCompnents/global.Style";
import Home from './components/home';
import About from './components/about';
import Project01 from './components/Project01_Simac';
import Project02 from './components/Project02_DDW';
import Logo from './Images/Logo-site.png'
import {NavigationBar, Row} from "./components/styleCompnents/container.Style";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Row>
        <img src={Logo} id='logo' />
        <NavigationBar>
                <Link to="/" id="nav-link" className={({ isActive }) => (isActive ? 'active' : '')}>Home</Link>
                <Link to="/about" id="nav-link" className={({ isActive }) => (isActive ? 'active' : '')}>About Me</Link>
      </NavigationBar>
        </Row>
       
        <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/about' element={< About />}></Route>
                <Route exact path='/project01' element={< Project01 />}></Route>
                <Route exact path='/project02' element={< Project02 />}></Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
