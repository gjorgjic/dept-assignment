import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Werk from './Pages/Werk';
import Over from './Pages/Over';
import Dientsen from './Pages/Dientsen';
import Partners from './Pages/Partners';
import Vacatures from './Pages/Vacatures';

export default function Main() {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/werk">
                    <Werk />
                </Route>
                <Route exact path="/over">
                    <Over />
                </Route>
                <Route exact path="/dientsen">
                    <Dientsen />
                </Route>
                <Route exact path="/partners">
                    <Partners />
                </Route>
                <Route exact path="/vacatures">
                    <Vacatures />
                </Route>
            </Switch>
        </main>
    )
}