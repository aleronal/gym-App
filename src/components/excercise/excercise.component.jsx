import React from 'react';
import './excercise.styles.scss';

import {motion} from 'framer-motion';

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
            
        
    )
}

export default Excercise;