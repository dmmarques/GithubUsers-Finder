import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import UserRepos from '../repos/UserRepos';

export function SingleUser() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const params = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`https://api.github.com/users/${params.login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
                setUser(res.data);
                setLoading(false);
                console.log('UserByUsername', res.data);
            } catch (error) {
                console.error('Error fetching user:', error);
                setLoading(false);
            }
        };

        fetchUser();
    }, [params.login]);

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
                user && (
                    <div>
                        <div
                            class="card"
                            style={{ width: '18rem', textAlign: 'center', margin: 'auto', width: '80%' }}>
                            <div class="card-body">
                                <h5 class="card-title">{user.login}</h5>
                                <img
                                    src={user.avatar_url}
                                    class="card-img-top"
                                    alt="UserAvatar"
                                    style={{ width: '120px', borderRadius: '50%' }}></img>
                                <p class="card-text">Type: {user.type}</p>
                                <p class="card-text">
                                    <b>Location:</b> {user.location}
                                </p>
                                <p class="card-text">NodeId: {user.node_id}</p>
                                <p class="card-text">
                                    <b>Company: </b>
                                    {user.company ? user.company : 'Not Disclosed'}
                                </p>
                                <b>Hirable:</b>
                                {user.hirable ? (
                                    <div
                                        class="spinner-grow text-success"
                                        role="status"></div>
                                ) : (
                                    <div
                                        class="spinner-grow text-danger"
                                        role="status">
                                        {' '}
                                    </div>
                                )}
                                <p></p>
                                <Link
                                    to={user.html_url}
                                    target="a_blank"
                                    class="btn btn-secondary">
                                    Visit Profile
                                </Link>
                                <p></p>
                                <Link
                                    to="/"
                                    class="btn btn-secondary">
                                    Go Back
                                </Link>
                            </div>
                        </div>
                        <div
                            class="card"
                            style={{ width: '18rem', textAlign: 'center', margin: 'auto', width: '80%' }}>
                            Followers Div
                        </div>
                        <div
                            class="card"
                            style={{ width: '18rem', textAlign: 'center', margin: 'auto', width: '80%' }}>
                            <UserRepos />
                        </div>
                    </div>
                )
            )}
        </div>
    );
}

export default SingleUser;
