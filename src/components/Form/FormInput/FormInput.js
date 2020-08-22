import React from 'react';

// TODO: get class names as props and set classes for inputs accordingly

const formInput = (props) => {
    let inputElement = null;
    switch(props.elementType) {
        case('input'):
            /*** EXAMPLE
                password: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'password',
                        placeholder: 'eg., 123456'
                    },
                    value: '',
                    label:'Password'
                }
            ***/
            inputElement = <input {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;


        case('textarea'):
            /*** EXAMPLE
                textArea: {
                    elementType: 'textarea',
                    elementConfig: {
                        placeholder: 'enter text here'
                    }
                    value: ''
                    label: 'textArea'
                }
            ***/
            inputElement = <textarea {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;


        case('select'):
            /*** EXAMPLE
                selectInput: {
                    elementType:'select', // sets tag
                    elementConfig: { // sets the options
                        options: {
                            opt1: {value:"opt1val", displayValue:"opt1disp"},
                            opt2: {value:"opt2val", displayValue:"opt2disp"},
                            opt3: {value:"opt3val", displayValue:"opt3disp"},
                        }
                    },
                    value: 'opt1val',
                    label: 'select',
                    changed: eventHandler,
                    class: {formClasses.selectClass}
                }
            ***/
            let options = []
            for (let key in props.elementConfig.options) {
                options.push(props.elementConfig.options[key]);
            }
            inputElement = (<select
                    value={props.value}
                    onChange={props.changed}
                >
                {
                    options.map((option) => {
                        return <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    })
                }
                </select>);
            break;

        default:
            inputElement = <input {...props.elementConfig} value={props.value} onChange={props.changed}/>
    }

    return (
        <div className={props.class}>
            {props.elementType !== "button"? <label>{props.label}</label> : null }
            {inputElement}
        </div>
    )
}

export default formInput;