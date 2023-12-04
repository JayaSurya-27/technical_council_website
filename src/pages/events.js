import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/clubCard";
import '../css/events.css';
// import { useApi } from "../context/apiState";
const Events = () => {
  // const { currentEvent, pastEvents, getCurrentEvents, getPastEvents } = useApi();
  const [selectedTab, setSelectedTab] = useState("current"); // "current" or "past"
 const currentEvent = 
  [
    {
      name: "Event 6",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuriLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuri",
      date: "2020-11-20",
    },
 
    {
      name: "Event 2",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurieLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuri",
      date: "2020-11-21",
    },
    {
      name: "Event 2",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurieLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuri",
      date: "2020-11-21",
    },
  ]
  const pastEvents =  [
      {
        name: "Event 6",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuriLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuri",
        date: "2020-11-20",
      },
   
      {
        name: "Event 2",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurieLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuri",
        date: "2020-11-21",
      },
      {
        name: "Event 2",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurieLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuri",
        date: "2020-11-21",
      },
    ]
  
  // useEffect(() => {
  //   if (selectedTab === "current" && currentEvent.length === 0) {
  //     getCurrentEvents();
  //   } else if (selectedTab === "past" && pastEvents.length === 0) {
  //     getPastEvents();
  //   }
  // }, [selectedTab, currentEvent, pastEvents, getCurrentEvents, getPastEvents]);

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
              title="The Matrix"
              side={"left"}
              date="24"
              month="AUGUST"
              venue="The Grand Illusion Cinema"
              description="A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
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
              title="The Matrix"
              side={"left"}
              date="24"
              month="AUGUST"
              venue="The Grand Illusion Cinema"
              description="A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
              register="http://www.imdb.com/title/tt0266697/plotsummary?ref_=tt_stry_pl"
            />
        )  )}
        </>
      )}
    </>
  );
};

export default Events;
