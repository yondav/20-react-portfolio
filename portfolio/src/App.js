import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
    </Router>
  );
}

export default App;
