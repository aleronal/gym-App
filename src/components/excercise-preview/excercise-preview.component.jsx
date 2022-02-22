import React from 'react';
import './excercise-preview.styles.scss';


const ExcercisePreview = ({items}) => {

console.log(items.map(i => {
    console.log(i.name);
}));
   

    return(
        <div>this</div>
    )

}

export default ExcercisePreview;


   // const [selectedId, setSelectedId] = useState(null);
    
        // <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
        //     <motion.h5>{item.name}</motion.h5>
        //     <motion.h2>{item.reps}</motion.h2>
        // </motion.div>
          
        //   ,
        // <AnimatePresence>
        // {selectedId && (
        //     <motion.div layoutId={selectedId}>
        //     <motion.h5>{item.subtitle}</motion.h5>
        //     <motion.h2>{item.title}</motion.h2>
        //     <motion.button onClick={() => setSelectedId(null)} />
        //     </motion.div>
        // )}
        // </AnimatePresence>
