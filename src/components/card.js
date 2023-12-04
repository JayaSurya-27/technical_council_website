<<<<<<< HEAD
import React  from "react";
import './card.css';
export default function Card()
{
    return(
        <>
        <div className="card">
        <div className="card-img">
            <img src="https://media.licdn.com/dms/image/D4D0BAQFnhMkIzW5NGg/company-logo_200_200/0/1691860181696?e=1707350400&v=beta&t=1R8zUl73ru4kz6NPCPPX7x9vpBoFVYoZO7b4li8Pd7g" alt="event pic" className="card-img card_2"/>

        </div>
        <div className="card-text">
            <h2>Tech Club</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio recusandae voluptatem blanditiis harum consequuntur natus eos. Nobis asperiores cumque quam.</p>
            <a href='#' style={{textDecoration:'none'}}>Know More
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-caret-right" viewBox="0 0 16 16">
                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                  </svg>
            </a>
        </div>
    </div>   
    <div className="card">
        <div className="card-img">
            <img src="https://media.licdn.com/dms/image/D4D0BAQFnhMkIzW5NGg/company-logo_200_200/0/1691860181696?e=1707350400&v=beta&t=1R8zUl73ru4kz6NPCPPX7x9vpBoFVYoZO7b4li8Pd7g" alt="event pic" className="card-img card_2"/>
        </div>
        <div className="card-text">
            <h2>Club Recruitment</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis neque harum impedit culpa, maiores atque tenetur officiis cupiditate sequi?</p>
            <a href='#' style={{textDecoration: 'none',}}>Know More
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-caret-right" viewBox="0 0 16 16">
                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                  </svg>
            </a>
        </div>
    </div>
    <div className="card">
           <div className="card-img">
            <img src="https://media.licdn.com/dms/image/D4D0BAQFnhMkIzW5NGg/company-logo_200_200/0/1691860181696?e=1707350400&v=beta&t=1R8zUl73ru4kz6NPCPPX7x9vpBoFVYoZO7b4li8Pd7g" alt="event pic" className="card-img card_2"/>
        </div>
        <div className="card-text">
            <h2>Alumni Help</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam dolor natus, illo eveniet facilis corrupti? Culpa excepturi porro aliquam ullam!</p>
            <a href='#' style={{textDecoration: 'none',}}>Know More
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-caret-right" viewBox="0 0 16 16">
                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                  </svg>
            </a>
        </div>
    </div>
    <div className="card">
        <div className="card-img">
         <img src="https://media.licdn.com/dms/image/D4D0BAQFnhMkIzW5NGg/company-logo_200_200/0/1691860181696?e=1707350400&v=beta&t=1R8zUl73ru4kz6NPCPPX7x9vpBoFVYoZO7b4li8Pd7g" alt="event pic" className="card-img card_2"/>
     </div>
     <div className="card-text">
         <h2>Work with Profs.</h2>
         <p>Prof. Ramesh is looking for enthusiastic students to work with him in his research projects.</p>
         {/* <!-- <a href="#" className="btn btn-warning">Know More</a> --> */}
         <a href='#' style={{textDecoration: 'none',}}>Know More
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-caret-right" viewBox="0 0 16 16">
                <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
              </svg>
        </a>
         {/* <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg> -->
         <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
            <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
          </svg> --> */}
     </div>
 </div>
    <div className="card last">
        <div className="card-img">
            <img src="https://media.licdn.com/dms/image/D4D0BAQFnhMkIzW5NGg/company-logo_200_200/0/1691860181696?e=1707350400&v=beta&t=1R8zUl73ru4kz6NPCPPX7x9vpBoFVYoZO7b4li8Pd7g" alt="event pic" className="card-img card_2"/>
        </div>
        <div className="card-text">
            <h2>Consultancies</h2>
            <p>FlexJob is looking for IIT Dh students for a machine learning freelancing opportunity</p>
            {/* <!-- <a href="#" className="btn btn-warning">Know More</a> --> */}
            <a href='#' style={{textDecoration: 'none',}}>Know More
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-caret-right" viewBox="0 0 16 16">
                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                  </svg>
            </a>
        </div>
    </div>
    </>
    );
}
=======
import "../css/card.css";
import React from "react";

const Card = (props) => {
  const {
    imageUrl,
    title,
    date,
    month,
    side,
    venue,
    description,
    reviewLink,
    register,
  } = props;
  if (side === "left") {
    return (
      <div className="card">
        <div className="card_left">
          <img src={imageUrl} alt={title} className="card_left_image" />
          <div className="card_left_date">{date}</div>
          <div className="card_left_month">{month}</div>
        </div>
        <div className="card_right">
          <h1>{title}</h1>
          <div className="card_right_details">
            <ul>
              <li>{venue}</li>
            </ul>
            <br />
          </div>
          <div className="card_right_description">
            <p>{description}</p>
          </div>
          {/* <div className="card_right_knowmore">
          <a
            href="https://youtu.be/dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Know more
          </a>
        </div> */}
          <div className="card_right_button">
            <a href={register} target="_blank" rel="noopener noreferrer">
              REGISTER
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card">
        <div className="card_right">
          <h1>{title}</h1>
          <div className="card_right_details">
            <ul>
              <li>{venue}</li>
            </ul>
            <br />
          </div>
          <div className="card_right_description">
            <p>{description}</p>
          </div>
          {/* <div className="card_right_knowmore">
          <a
            href="https://youtu.be/dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Know more
          </a>
        </div> */}
          <div className="card_right_button">
            <a href={register} target="_blank" rel="noopener noreferrer">
              REGISTER
            </a>
          </div>
        </div>
        <div className="card_left">
          <img src={imageUrl} alt={title} className="card_left_image" />
          <div className="card_left_time">
            <div className="card_left_date">{date}</div>
            <div className="card_left_month">{month}</div>
          </div>
        </div>
      </div>
    );
  }
};
export default Card;
>>>>>>> 8bd59ce22b357f26f2258bc980af646fbb4d38c0
