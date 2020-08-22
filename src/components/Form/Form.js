import React from 'react';

import Button from '../UI/Button/Button'

import FormInput from './FormInput/FormInput'



const form = (props) => {
    let formElements = [];

    for (let key in props.form) {
        formElements.push({
            id: key,
            config: props.form[key],
        });
    }

    let form = (
        <form className={props.class}>
            {formElements.map(formElement => <FormInput
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    label={formElement.config.label}
                    changed={(event) => props.inputHandler(event, formElement.id)}
                />
            )}
            <Button clicked={props.buttonHandler}>Submit</Button>
        </form>
    )
    return form;
}

export default form;