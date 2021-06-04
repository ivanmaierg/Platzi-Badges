import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import Layout from './Layout';

export const App = () => {
    return (
            <BrowserRouter>
            <Layout>
                <Switch>
                    <Route  exact path="/badges" component={Badges}></Route>
                    <Route exact path="/badges/new" component={BadgeNew}></Route>
                </Switch>
            </Layout>
            </BrowserRouter>
    )
}


export default App;