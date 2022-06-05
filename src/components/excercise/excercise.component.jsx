import React from 'react';

import {motion} from 'framer-motion';
import BlueButton from '../Button/button.component';

import './excercise.styles.scss';

const Excercise = ({item}) => {

    const {name, image, reps, times} = item;

    const listVariant ={
        hidden: {
            x:"-1000vh",
            opacity:0,
        },
        visible:{
            x:0,
            opacity:1,
        }
    }

    return (
        <div>
            <motion.div 
            className="excercise-item"
            variants={listVariant}
            animate="visible"
            initial="hidden"
            whileHover={{
                scale:1.1,
            }}
            >
            <div className="container-names">
                <span className="name">{name}</span>
                <span className="reps">{reps} Reps</span>
                <span className="times">{times} Times</span>
            </div>
            <img className="image" src={image} alt=""/>
                
            </motion.div>

            {/* this three butttons(still have to add the third one with ternary operator) will have the logic to fade away and when all of them are finish the third button(not created yet) will appear saying that the training has been completed */}
            <BlueButton label="Completed"></BlueButton>
            <BlueButton className="yellow" label="Skip"></BlueButton>
            
        </div>
            
        
    )
}

export default Excercise;