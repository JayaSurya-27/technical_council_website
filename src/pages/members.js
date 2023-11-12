import React, { useState, useEffect, useContext } from "react";
import "../css/members.css";
import MemberCard from "../components/memberCard";
import photo from '../components/profile_image.png';
const MemberCardSample = () => {
  return (
    <MemberCard name = {'John Doe'} email={'SomeName@gmail.com'} linkedin={'https://www.linkedin.com/in/'} github = {'https://github.com/'} profileImage={photo} />
  )
}
const Members = () => {
  return (
    <div className="members-wrapper">
      <p className="member-section">
        Tech Club Secratory
      </p>
      <div className="member-data">
        <MemberCardSample/>
      </div>
      <p className="member-section">
        Tech Team
      </p>
      <div className="member-data">
        <MemberCardSample/>
        <MemberCardSample/>
        <MemberCardSample/>
        <MemberCardSample/>
        <MemberCardSample/>
      </div>
      <p className="member-section">
        Other Members
      </p>
      <div className="member-data">
        <MemberCardSample></MemberCardSample>
        <MemberCardSample></MemberCardSample>
        <MemberCardSample></MemberCardSample>
        <MemberCardSample></MemberCardSample>
        <MemberCardSample></MemberCardSample>
        <MemberCardSample></MemberCardSample>
        <MemberCardSample></MemberCardSample>
      </div>
    </div>
  );
};

export default Members;
