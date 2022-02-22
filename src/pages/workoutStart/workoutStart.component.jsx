import React from 'react';
import './workoutStart.styles.scss';

import GYM_DATA from '../../gym_data';

import ExcerciseOverview from '../../components/excercise-overview/excercise-overview.component';


   

const WorkOut = () => {

    // here i need to create the logic to return either the first object or the second from the gym data array depending on which day of the week we are, eg. monday = legs, tuesday = chest and arms,

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const d = new Date();
    let day = weekday[d.getDay()];
    
    const excercises = GYM_DATA.filter(item =>{
         if(item.dayofweek === day){
             return item;
         }
        
    }) 
  console.log(excercises);
    return (
        <ExcerciseOverview excercises={excercises}></ExcerciseOverview>
        
    )
};

export default WorkOut;
