import React, { useState, createContext } from "react";

export const WheelsContext = createContext();

export const WheelsContextProvider = (props) => {
  const [wheels, setWheels] = useState([]);
  
  return (
    <WheelsContext.Provider
      value ={{wheels, setWheels}} >
      {props.children}
    </WheelsContext.Provider>
  );
  };  