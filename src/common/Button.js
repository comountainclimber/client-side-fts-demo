import React from 'react';
import PropTypes from 'prop-types';

import './styles/Button.css';

const buttonPropTypes = {
    additionalStyles: PropTypes.object,
    onClick: PropTypes.func,
    text: PropTypes.string
};
const Button = props => (
    <button
        className="Button-base"
        style={props.additionalStyles}
        onClick={props.onClick}
    >
        {props.text}
    </button>
);
Button.propTypes = buttonPropTypes;

export const DefaultButton = props => (
    <Button {...props} />
);

const paginationButtonPropTypes = {
    active: PropTypes.bool,
};
export const PaginationButton = props => (
    <DefaultButton
        {...props}
        additionalStyles={{
            width: 35,
            height: 35,
            color: 'blue',
            backgroundColor: props.active ? 'yellow' : 'white',
            fontSize: 16
        }}
    />
);
PaginationButton.propTypes = paginationButtonPropTypes;
