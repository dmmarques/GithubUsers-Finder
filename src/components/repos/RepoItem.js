import React from 'react';
import { Link } from 'react-router-dom';

const RepoItem = ({ repo }) => {
    console.log(repo.id);
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{repo.full_name}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Description</h6>
                <p class="card-text">{repo.description ? repo.description : 'No Description Available'}</p>
                <p>
                    Public:
                    {repo.private ? (
                        <div
                            class="spinner-grow text-danger"
                            role="status"></div>
                    ) : (
                        <div
                            class="spinner-grow text-success"
                            role="status">
                            {' '}
                        </div>
                    )}
                </p>
                <Link
                    to={repo.html_url}
                    target="a_blank"
                    class="btn btn-secondary">
                    Visit Repo
                </Link>
            </div>
        </div>
    );
};

export default RepoItem;
