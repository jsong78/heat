import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import Home from './components/Home.jsx';

render(
    <Router>
        <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
        </div>
    </Router>,
    document.getElementById('react-app')
);
