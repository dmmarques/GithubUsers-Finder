import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import RepoItem from './RepoItem';

export function UserRepos() {
    const [repos, setRepos] = useState(null);
    const [loading, setLoading] = useState(false);
    const params = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`https://api.github.com/users/${params.login}/repos?per_page=5&sort=created:asc?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
                setRepos(res.data);
                setLoading(false);
                console.log('GetUserRepos', res.data);
            } catch (error) {
                console.error('Error fetching repos:', error);
                setLoading(false);
            }
        };

        fetchUser();
    }, [params.login]);

    return (
        <div>
            {repos &&
                repos.map((iRepo) => (
                    <RepoItem
                        repo={iRepo}
                        key={iRepo.id}
                    />
                ))}
        </div>
    );
}

export default UserRepos;
