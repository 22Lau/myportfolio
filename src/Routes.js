import { Route, Router } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Portfolio from './pages/Portfolio';
import Music from './components/Music';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function Router() {
  return(
    <AppRouter>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/music" component={Music} />
      <Route path="/contact" component={Contact} />
      <Route path="/footer" component={Footer} />
      </Switch>    
    </AppRouter>
  
);
}

export default Router;

