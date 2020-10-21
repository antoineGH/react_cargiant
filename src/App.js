import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Cars } from './components/Cars';
import { Car } from './components/Car';
import { Latest } from './components/Latest';
import { Add } from './components/Add';
import { Error_404 } from './components/Error_404';
import { NavbarCar } from './components/Navbar';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <NavbarCar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Home" exact component={Home} />
                <Route path="/Cars" exact component={Cars} />
                <Route path="/Car/:id" exact component={Car} />
                <Route path="/Latest" exact component={Latest} />
                <Route path="/Add" exact component={Add} />
                <Route path="/" component={Error_404}/>
            </Switch>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
