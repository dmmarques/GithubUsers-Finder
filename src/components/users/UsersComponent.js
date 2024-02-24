import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const UsersComponent = () => {
    const githubContext = useContext(GithubContext);

    //If we do not de structure here, we can do githubContext.loading or githubContext.users
    const { loading, users } = githubContext;

    if (loading) {
        return <Spinner />;
    } else {
        return (
            <div style={userComponentGridStyle}>
                {/* prettier-ignore */}
                {users.map((user) => (
                    <UserItem
                        key={user.id}
                        user={user}
                    />
                ))}
            </div>
        );
    }
};

UsersComponent.prototypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
};

const userComponentGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem',
};

export default UsersComponent;
