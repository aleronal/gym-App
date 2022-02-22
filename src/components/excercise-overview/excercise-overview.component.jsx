import React from 'react';
import './excercise-overview.styles.scss';

import ExcercisePreview from '../excercise-preview/excercise-preview.component';

const ExcerciseOverview = ({excercises}) => (

    <div className="excercise-overview">
        {
            excercises.map(({id, ...items }) =>(
                <ExcercisePreview key={id} {...items}></ExcercisePreview>
            ))
        }
    </div>

);

    
    
  

     

export default ExcerciseOverview;