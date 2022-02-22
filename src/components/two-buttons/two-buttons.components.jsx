import React from 'react';
import {useNavigate} from 'react-router-dom';

// buttons styles from rcaferati react-awesome-button
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";

// styles
import './two-buttons.styles.scss';


const TwoButtons = () => {

    const navigate = useNavigate();

    const onClick = (name) => {
        navigate(`/${name}`)
      }

   

    return(
        <div className="two-buttons">
            <AwesomeButton onPress={() => {
            onClick('alejandro') }}
            className="ale" size="large" type="primary" label="Alejandro">Alejandro</AwesomeButton>

            <AwesomeButton onPress={() => {
            onClick('estefany') }}
            className="estefany" size="large" type="primary">Estefany</AwesomeButton>
        </div>
      
    );
}

export default TwoButtons