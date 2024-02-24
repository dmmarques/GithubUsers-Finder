import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, html_url, avatar_url } }) => {
    return (
        <div
            class="card"
            style={{ width: '18rem' }}>
            {/* prettier-ignore */}
            <img src={avatar_url} class="card-img-top"/>
            <div
                class="card-body"
                style={{ textAlign: 'center' }}>
                {/* prettier-ignore */}
                <h5 class="card-title">{login}</h5>
                <p class="card-text"></p>
                <Link
                    to={html_url}
                    class="btn btn-primary"
                    target="_blank">
                    Github Profile
                </Link>
                <Link
                    to={`/user/${login}`}
                    class="btn btn-primary">
                    More
                </Link>
            </div>
        </div>
    );
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserItem;
