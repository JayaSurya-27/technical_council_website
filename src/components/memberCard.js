import React from 'react'
import styles from "./memberCard.module.css"
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const MemberCard = ({ name, email, linkedin, github, profileImage }) => {
  return (
    <div className={styles.member_profile}>
        <img src={profileImage} alt="Profile" className={styles.profile_photo} />
      <div className={styles.profile_details}>
        
        <h3 className={styles.profile_header}>{name}</h3>
        <div className={styles.social_icons}>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href={"mailto:" + email}>
            <FaEnvelope/>
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;