import React from 'react';
import GlobalFonts from './assets/fonts/';
import Header from './components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';
import Footer from './components/Footer/Footer';
import { Provider } from 'react-redux';
import store from './store'
import './App.scss';
import LazyLoad from 'react-lazyload';

 function App() {
   return (
     <Provider store={store}>
      <Router>
        <GlobalFonts />
        <div className="page">
          <Header />
          <Main />
          <LazyLoad once>
            <Footer />
          </LazyLoad>
        </div>
      </Router>
    </Provider>
   );
 }

 export default App;