import React, { Fragment } from 'react';
import SearchUser from '../users/SearchUser';
import UsersComponent from '../users/UsersComponent';

const Home = () => {
    return (
        <Fragment>
            <SearchUser />
            <UsersComponent />
        </Fragment>
    );
};

export default Home;
