import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import { NotFound } from '../pages/NotFound';
import Layout from './Layout';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges}></Route>
                    <Route exact path="/badges/new" component={BadgeNew}></Route>
                    <Route exact path="/404" component={NotFound}/>
                    <Redirect from="*" to="/404"/>
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;