import React from 'react';
import GlobalFonts from './assets/fonts/';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';
import Footer from './components/Footer';

 function App() {
   return (
    <Router>
      <GlobalFonts />
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
   );
 }

 export default App;