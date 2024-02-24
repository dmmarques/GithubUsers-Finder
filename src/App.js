import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import Alert from './components/layout/Alert';
import About from './components/layout/About';
import SingleUser from './components/users/SingleUser';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

const App = () => {
    return (
        <GithubState>
            <AlertState>
                <Router>
                    <div>
                        <NavBar />
                        <Alert />
                        <Routes>
                            <Route
                                path="/"
                                element={<Home />}
                            />
                            <Route
                                path="/about"
                                element={<About />}
                            />
                            <Route
                                path="/user/:login"
                                element={<SingleUser />}
                            />
                            <Route element={<NotFound />}></Route>
                        </Routes>
                    </div>
                </Router>
            </AlertState>
        </GithubState>
    );
};

export default App;
