import React from 'react';
import {Switch, Route} from 'react-router-dom';
//import Home from './Home';
import AuthFormContainer from './components/auth/AuthContainer';
import Lending from './components/lending/Lending';
import HomeContainer from './components/home/HomeContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import SwipeContainer from './components/Swipecontainer/Swipecontainer';

const Router = ({setUser, user}) => (
    <Switch>
        <Route exact path="/" render={(props) => <Lending user={user} {...props} />} />
        <Route path='/home' render={(props) => <HomeContainer user={user} {...props} />}/>
        <Route path='/profile' render={(props) => <ProfileContainer user={user} {...props} />}/>
        <Route exact path="/login" render={(props) => <AuthFormContainer {...props} setUser={setUser} user={user} />} />
        <Route exact path="/register" render={(props) => <AuthFormContainer {...props} setUser={setUser} user={user} />} />
        <Route exact path="/swipe" render={(props) => <SwipeContainer {...props} setUser={setUser} user={user}/>} />
        {/*<Router exact path="/swipe" render={(props)} =><AuthFormContainer {...props} setUser={setUser} user={user} />} / >*/}
        {/*<Router exact path="/chat" render={(props)} =><AuthFormContainer {...props} setUser={setUser} user={user} />} / >*/}

        
    </Switch>
)

export default Router;