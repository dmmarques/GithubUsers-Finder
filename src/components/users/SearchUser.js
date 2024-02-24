import React, { useContext, useState } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const SearchUser = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('Please enter the value', 'light');
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    };

    return (
        <div>
            <form
                onSubmit={onSubmit}
                style={{ textAlign: 'center' }}>
                <input
                    type="text"
                    name="text"
                    placeholder="Search User"
                    value={text}
                    onChange={onChange}
                />
                <input
                    type="submit"
                    value="Search"
                    class="btn btn-secondary"
                />
                {githubContext.users.length > 0 && (
                    <button
                        onClick={githubContext.clearUsers}
                        class="btn btn-secondary"
                        style={{ textAlign: 'center' }}>
                        Clear Search
                    </button>
                )}
            </form>
        </div>
    );
};

export default SearchUser;
