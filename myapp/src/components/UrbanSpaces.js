import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UrbanSpaces from './components/UrbanSpaces';
import AddLand from './components/AddLand';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/urbanspaces" component={UrbanSpaces} />
                    <Route path="/add-land" component={AddLand} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
