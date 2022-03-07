import React from 'react';
import './excercise-preview.styles.scss';

import {motion} from 'framer-motion';

import Excercise from '../../components/excercise/excercise.component';


const ExcercisePreview = ({items}) => {

    const boxVariant = {
        hidden: {
            x:"-200vh"
        },
        visible:{
            x:0,
            transition:{
                when:"beforeChildren",
                delay:0.5,
                type:"spring",
                stiffness:10,
                staggerChildren:0.5
                
            }
        }
    }
    
    return(
        <div>
            <motion.div 
                className="excercise-preview"
                variants={boxVariant}
                animate="visible"
                initial="hidden"
                >
                {
                    items.map(item => (
                        <Excercise key={item.id} item={item}></Excercise>
                   
                    ))
                }
            </motion.div>
            
        </div>
    )
};


export default ExcercisePreview;

