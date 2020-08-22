import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Spaces</NavigationItem>
        <NavigationItem link="/">Home</NavigationItem>
    </ul>
)

export default navigationItems;