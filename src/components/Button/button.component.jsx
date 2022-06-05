import React from 'react';

import { AwesomeButton } from 'react-awesome-button';


import './button.styles.scss';

const BlueButton = (props) => {

    return(
    <AwesomeButton className={props.className} onPress={() => { props.handleClick() }} type="secondary">
    { props.label }</AwesomeButton>
    )
}

export default BlueButton;

