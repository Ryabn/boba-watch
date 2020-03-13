import React, { useEffect, useState } from 'react';
import { MemoryRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Add from './Add/Add';
import User from './User/User';
import History from './History/History';
import Login from './Login';
import Navigation from './Navigation/Navigation';
import FirebaseUser from './firebaseCalls';
import './App.css';

const Start = ({history}) => {
    useEffect(() => {
		// Theme(SavedTheme());
        FirebaseUser.init(user => {
            history.push(user ? '/app' : '/login');
		});
		console.log("v2.0.1");
    }, [history]);
    return (
        <Switch>
			<Route exact path='/'>
			</Route>
			<Route path='/login'>
				<Login />
			</Route>
			<Route path='/app'>
                <App />
			</Route>
		</Switch>
    );
}

const App = ({profile}) => {
    const [add, setAdd] = useState(false);
    const [user, setUser] = useState(false), openUser = setUser.bind(null, true);
    return (
        <Router initialEntries={['/dash', '/history']} initialIndex={0}>
            <img 
                src={FirebaseUser.get.user.photoURL}
                alt="user-settings"
                className="avatar-button"
                onClick={openUser}
            />
            <Switch>
                <Route exact path='/dash' >
                    <Dashboard /> 
                </Route>
                <Route exact path='/history'>
                    <History drinks={FirebaseUser.get.drinkids}/>
                </Route>
            </Switch>
            <Add open={add} setOpen={setAdd} edit={null}/>
            <User profile={FirebaseUser.get.profile} open={user} setOpen={setUser} />
            <Navigation add={add} toggleAdd={() => {setAdd(!add)}} />
        </Router>
    );
}

export default withRouter(Start);
