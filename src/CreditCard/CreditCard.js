import React from "react";

export const CreditCard = props => {
  let cardImage;
  let type = "Visa"
    ? (cardImage = "../img/visa.png")
    : (cardImage = "../img/master-card.png");

  const divStyle = { backgroundColor: props.bgColor, color: props.color, width: "20%" };

  return (
    <div style={divStyle}>
      <img className='CardLogo' src={cardImage} alt="" />

      <p>****-****-****{props.number.slice(-4)}</p>
      <p>
        Expires: {props.expirationMonth}/
        {props.expirationYear.toString().slice(-2)}
      </p>
      <p>{props.expirationYear}</p>
      <p>{props.bank}</p>
      <p>{props.owner}</p>
      {/* <p>{props.bgColor}</p>
      <p>{props.color}</p> */}
    </div>
  );
};
