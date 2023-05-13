import './App.css';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Products from './components/Products';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Link to='/'>Home</Link><br/>
      <Link to='/about'>About</Link><br/>
      <Link to='/contact'>Contact</Link><br/>
      <Link to='/products/1'>Product</Link><br/>
      <hr/>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/products/:id' component={Products} />
        <Route  component={NotFound} />

      </Switch>


    </div>
  );
}

export default App;
