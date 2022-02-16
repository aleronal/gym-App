import React from 'react';

// buttons styles from rcaferati react-awesome-button
import {
    AwesomeButton,
    AwesomeButtonProgress,
    AwesomeButtonSocial,
  } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";

// styles
import './two-buttons.styles.scss';


const TwoButtons = () => {

    return(
        <div className="two-buttons">
            <AwesomeButton className="ale" size="large" type="primary">Alejandro</AwesomeButton>
            <AwesomeButton className="estefany" size="large" type="primary">Estefany</AwesomeButton>
        </div>
      
    );
}

export default TwoButtons