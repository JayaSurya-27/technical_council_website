import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/card";
import '../css/events.css';
import { useApi } from "../context/apiState";
const Events = () => {
  const { currentEvent, pastEvents, getCurrentEvents, getPastEvents } = useApi();
  const [selectedTab, setSelectedTab] = useState("current"); // "current" or "past"

  useEffect(() => {
    if (selectedTab === "current" && currentEvent.length === 0) {
      getCurrentEvents();
    } else if (selectedTab === "past" && pastEvents.length === 0) {
      getPastEvents();
    }
  }, [selectedTab, currentEvent, pastEvents, getCurrentEvents, getPastEvents]);

  return (
    <>
      <div className="tab-manager">
        <div
          className={`tab ${selectedTab === "current" ? "active" : ""}`}
          onClick={() => setSelectedTab("current")}
        >
          Current Events
        </div>
        <div
          className={`tab ${selectedTab === "past" ? "active" : ""}`}
          onClick={() => setSelectedTab("past")}
        >
          Past Events
        </div>
      </div>

      {selectedTab === "current" && (
        <>
          <h1 className="event-heading">Current Events</h1>
          {currentEvent.map((event) => (
            <Card
              imageUrl="https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/h8fnwL1.png"
              title={event.name}
              side={"left"}
              date="24"
              month="AUGUST"
              venue="The Grand Illusion Cinema"
              description={event.description}
              register="http://www.imdb.com/title/tt0266697/plotsummary?ref_=tt_stry_pl"
            />
       ) )}
        </>
      )}

      {selectedTab === "past" && (
        <>
          <h1 className="event-heading">Past Events</h1>
          {pastEvents.map((event) => (
            <Card
              imageUrl="https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/h8fnwL1.png"
              title={event.name}
              side={"left"}
              date="24"
              month="AUGUST"
              venue="The Grand Illusion Cinema"
              description={event.description}
              register="http://www.imdb.com/title/tt0266697/plotsummary?ref_=tt_stry_pl"
            />
        )  )}
        </>
      )}
    </>
  );
};

export default Events;
