import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ApiContext = createContext();

export const useApi = () => {
  return useContext(ApiContext);
};

const ApiState = (props) => {
  const [currentEvent, setCurrentEvent] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  const getCurrentEvents = async () => {
    const response = await axios.get("http://localhost:3001/currentEvents");
    setCurrentEvent(response.data);
  };

  const getPastEvents = async () => {
    const response = await axios.get("http://localhost:3001/pastEvents");
    setPastEvents(response.data);
  };

  useEffect(() => {
    getCurrentEvents();
    getPastEvents();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        currentEvent,
        pastEvents,
        getCurrentEvents,
        getPastEvents,
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiState;
