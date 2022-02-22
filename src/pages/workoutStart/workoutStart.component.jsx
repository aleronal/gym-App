import React from 'react';
import './workoutStart.styles.scss';

import GYM_DATA from '../../gym_data';


   

const WorkOut = () => {

    // here i need to create the logic to return either the first object or the second from the gym data array depending on which day of the week we are, eg. monday = legs, tuesday = chest and arms,

    const excersices = GYM_DATA.map(item =>{
        return item; 
        
    }) 
  
    return (
        
        <div>d</div>
    )
};

export default WorkOut;

// import React from 'react'

// const Workouts = () => {

//         const [selectedId, setSelectedId] = useState(null);
    
//         <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
//             <motion.h5>{item.name}</motion.h5>
//             <motion.h2>{item.reps}</motion.h2>
//         </motion.div>
          
//           ,
//         <AnimatePresence>
//         {selectedId && (
//             <motion.div layoutId={selectedId}>
//             <motion.h5>{item.subtitle}</motion.h5>
//             <motion.h2>{item.title}</motion.h2>
//             <motion.button onClick={() => setSelectedId(null)} />
//             </motion.div>
//         )}
//         </AnimatePresence>
// }

// export default Workouts;