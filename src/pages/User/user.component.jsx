import React from 'react';


import {useParams,useNavigate} from 'react-router-dom';


//awesome Button
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";

import './user.styles.scss';

const User = () => {

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const d = new Date();
    let day = weekday[d.getDay()];

    let params = useParams();

    const navigate = useNavigate();

    const onClick = (name) => {
        navigate(`/user/${name}/workoutstarted`)
      }

    

    return(
        <div className="user-page">
            <div className="welcome">
                Welcome {params.user} your Gym Code it's : 12345
            </div>
            <div className="day-of-week">
                Today it's <span className="day">{day}</span> so today it's Legs day!!
            </div>
            <div className='start-workout'>
                Click To Start the Workout
            </div>
            <AwesomeButton onPress={() => {
            onClick(`${params.user}`) }} className="workout" type="primary">Start WorkOut 🏋🏼‍💪🏼</AwesomeButton>

        </div>
    )

}

export default User;
