// import React from 'react';

// const ToDo = ({task, isDone}) => {
//     return (
//         <div>
//             <p>task: {task}</p>
            
//         </div>
//     );
// };

// export default ToDo;

import React from 'react';

const ToDo = ({task, isDone}) => {
    if(isDone == true){
        return(
            <p>task:{task}</p>
        )
    }
};

export default ToDo;