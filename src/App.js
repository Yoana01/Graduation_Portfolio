import './App.css';
import { BrowserRouter as Router,Routes, Route, NavLink  } from 'react-router-dom';
import { GlobalStyle } from "./components/styleCompnents/global.Style";
import Home from './components/home';
import About from './components/about';
import Project01 from './components/Project01_Simac';
import Project02 from './components/Project04_StartUp';
import Project03 from './components/Project03_CC';
import Logo from './Images/Logo-site.png'
import {NavigationBar, Row} from "./components/styleCompnents/container.Style";


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Row>
        <img src={Logo} id='logo' alt="website logo" />
        <NavigationBar>
                <NavLink  to="/" id="nav-link">Home</NavLink>
                <NavLink  to="/about" id="nav-link">About Me</NavLink>
      </NavigationBar>
        </Row>
       
        <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/about' element={< About />}></Route>
                <Route exact path='/project01' element={< Project01 />}></Route>
                <Route exact path='/project02' element={< Project02 />}></Route>
                <Route exact path='/project03' element={< Project03 />}></Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
