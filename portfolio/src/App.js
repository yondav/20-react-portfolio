import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MetaTags from 'react-meta-tags';

import Home from './components/Pages/Home/Home';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Socials from './components/Socials/Socials';
import Dev from './components/Pages/Dev/Dev';
import Portraits from './components/Pages/Portraits/Portraits';
import Contact from './components/Pages/Contact/Contact';

const App = () => {
  return (
    <>
      <MetaTags>
        <title>yondav</title>
        <meta
          name='description'
          content='Yoni David - Full Stack Web Developer & Visual Designer'
        />
        <meta itemProp='name' content='yondav' />
        <meta
          itemProp='description'
          content='Yoni David - Full Stack Web Developer & Visual Designer'
        />
        <meta itemProp='image' content='https://www.yupny.com/img/yoni2.jpg' />
        <meta property='og:url' content='https://www.yondav.us' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='yondav' />
        <meta
          property='og:description'
          content='Yoni David - Full Stack Web Developer & Visual Designer'
        />
        <meta
          property='og:image'
          content='https://www.yupny.com/img/yoni2.jpg'
        ></meta>
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='yondav' />
        <meta
          name='twitter:description'
          content='Yoni David - Full Stack Web Developer & Visual Designer'
        />
        <meta
          name='twitter:image'
          content='https://www.yupny.com/img/yoni2.jpg'
        ></meta>
      </MetaTags>
      <Router>
        <div>
          <Nav />
          <Route exact path='/' component={Home} />
          <Route exact path='/dev' component={Dev} />
          <Route exact path='/portraits' component={Portraits} />
          <Route exact path='/contact' component={Contact} />
          <Socials />
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
