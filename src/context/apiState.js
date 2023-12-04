import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import ApiContext from "./apiContext";

const ApiState = (props) => {
  const [currentEvent, setCurrentEvent] = useState([]);
  const [pastEvent, setPastEvent] = useState([]);

  const getCurrentEvents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/apis/get_events/"
      );
      console.log(response);

      setCurrentEvent(response.data.filter((event) => event.isPast == false));
      setPastEvent(response.data.filter((event) => event.isPast == true));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCurrentEvents();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        currentEvent,
        pastEvent,
        getCurrentEvents,
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiState;
