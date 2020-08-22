import React from 'react';

import logosrc from '../../assets/logo.png';

import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={logosrc} alt="logo" />
    </div>
);

export default logo;