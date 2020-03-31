import React from 'react'

export const Random = (props) => {
    
    let randResult = Math.floor((Math.random() * props.max) + props.min);

    return (
        <div>
            Random value between {props.min} and {props.max} => {randResult}
        </div>
    )
}
