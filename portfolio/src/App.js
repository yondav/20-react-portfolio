import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Pages/Home/Home';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Socials from './components/Socials/Socials';
import Dev from './components/Pages/Dev/Dev';

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path='/' component={Home} />
        <Route exact path='/dev' component={Dev} />
        <Socials />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
