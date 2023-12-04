import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../components/card";
import "../css/events.css";
import ApiContext from "../context/apiContext";

const Events = () => {
  const context = useContext(ApiContext);
  const { currentEvent, getCurrentEvents, pastEvent } = context;

  const [selectedTab, setSelectedTab] = useState("current"); // "current" or "past"

  useEffect(() => {
    if (selectedTab === "current" && currentEvent.length === 0) {
      getCurrentEvents();
    } else if (selectedTab === "past" && currentEvent.length === 0) {
      getCurrentEvents();
    }
  }, [selectedTab, currentEvent, getCurrentEvents]);

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
          <div className="events">
          {currentEvent.map((event) => {
            // Convert the "event_date" string to a Date object
            const eventDate = new Date(event.event_date);
            const date = eventDate.getDate();
            const month = eventDate.toLocaleString("default", {
              month: "long",
            });

            return (
              <Card
                key={event.id}
                imageUrl="https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/h8fnwL1.png"
                title={event.name}
                date={date}
                month={month}
                venue={event.venue}
                description={event.description}
                register={event.url}
                side="left"
              />
            );
          })}
          </div>
        </>
      )}

      {selectedTab === "past" && (
        <>
          <h1 className="event-heading">Past Events</h1>
          <div className="events">
          {pastEvent.map((event) => {
            // Convert the "event_date" string to a Date object
            const eventDate = new Date(event.event_date);
            const date = eventDate.getDate();
            const month = eventDate.toLocaleString("default", {
              month: "long",
            });

            return (
              <Card
                key={event.id}
                imageUrl="https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/h8fnwL1.png"
                title={event.name}
                date={date}
                month={month}
                venue={event.venue}
                description={event.description}
                register={event.url}
                side="left"
              />
            );
          })}
          </div>
        </>
      )}
    </>
  );
};

export default Events;
