import React from 'react';

function Rating ({children}){
    let rate = Math.round(children)
    let stars= ["☆", "☆", "☆", "☆", "☆"]
        for(let i=0; i < rate; i++){
            stars[i] = "★";
        }


return (
    <div>
        {stars.join("")};
    </div>
)
}


export default Rating