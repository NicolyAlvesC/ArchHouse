import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Homepage from './pages/homepage/home.index';
import Entrada from './pages/entrda/entrada.index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Entrada}/>
                <Route path="/homepage" exact={true} component={Homepage}/>
            </Switch>
        </BrowserRouter>
    )
}