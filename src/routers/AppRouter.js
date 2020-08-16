import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';

export const AppRouter = () => {

    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={LoginScreen}
                    />
                </Switch>
            </div>
        </Router>
    )
}
