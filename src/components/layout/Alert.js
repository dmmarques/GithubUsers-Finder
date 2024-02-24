import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
    const alertContext = useContext(AlertContext);

    const { alert } = alertContext;

    return (
        alert !== null && (
            <div
                class="alert alert-primary"
                role="alert">
                {alert.msg}
            </div>
        )
    );
};

export default Alert;
