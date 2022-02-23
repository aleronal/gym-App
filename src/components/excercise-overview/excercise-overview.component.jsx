import React from 'react';
import './excercise-overview.styles.scss';

import {motion} from 'framer-motion';

import ExcercisePreview from '../excercise-preview/excercise-preview.component';

const ExcerciseOverview = ({excercises}) => (

    <motion.div className="excercise-overview">
        {
            excercises.map(({id, ...items }) =>(
                <ExcercisePreview key={id} {...items}></ExcercisePreview>
            ))
        }
    </motion.div>

);

    
    
  

     

export default ExcerciseOverview;