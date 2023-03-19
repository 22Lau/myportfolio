import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact'
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <Routes>
      <Home />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
     
      
    
    </Routes>
  </React.StrictMode>,
  document.getElementById('root')
);

// Esto es para medir el rendimiento de tu aplicación
reportWebVitals(console.log);

