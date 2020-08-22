import React from 'react';

import classes from './Button.module.css'

const button = (props) => {
    let thisButtonClasses = [classes.Button]
    if(props.buttonClasses)
        thisButtonClasses.push.apply(thisButtonClasses, props.buttonClasses);
    return (
        <button 
            className={thisButtonClasses.join(' ')}
            onClick={props.clicked}>
            {props.children}
        </button>
    )
}

export default button;