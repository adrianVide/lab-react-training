import React from 'react'

export const DriverCard = (props) => {
    return (
        <div className='driverCard'>
        <img src="props.img" alt=""/>
        <h2>{props.name}</h2>
        <p>{props.rating}</p>
        <p>Car: {props.car.model} - Plates {props.car.licensePlate}</p>
            
        </div>
    )
}
