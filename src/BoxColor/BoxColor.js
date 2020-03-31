import React from 'react'

export const BoxColor = (props) => {

    let hexcolor = '#'+componentToHex(props.r)+componentToHex(props.g)+componentToHex(props.b)
    function componentToHex(x) {
        var hex = x.toString(16);
        return hex.len === 1 ? "00" + hex : hex;
    }

    const divStyle = {backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`, height: '50px', width: '100%', textAlign: 'center', verticalAlign: 'middle'}

    return (
        <div style={divStyle}>
            <div>RGB ({props.r}, {props.g}, {props.b})</div>
            <div>HEX {hexcolor}</div>
        </div>
    )
}
