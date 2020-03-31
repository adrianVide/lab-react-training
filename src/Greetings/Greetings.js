import React from "react";

export const Greetings =(props) => {
  let greeting = '';

  switch (props.lang) {
    case "en":
      greeting = "Hello";
      break;
    case "es":
      greeting = "Hola";
      break;
    case "fr":
      greeting = "Bonjour";
      break;
    default:
      greeting = "Hallo";
      break;
  }

  return <div>{greeting} {props.children}</div>;
};
