import React from 'react';
import classes from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'
import image from './TechC_Logo.jpg'

function Footer() {
    const date = new Date()
    const year = date.getFullYear()
    return(
    <div id='footer'>
        <div className={classes.footer}>
          <div className={classes.footerDiv}>
            <div className={classes.footerImageWrapper}>
              
                <img
                  src={image}
                  width={180}
                  height={180}
                  priority
                  alt='coding_club_logo'
                />
  
            </div>
            <div className={classes.footerLinksWrapper}>
              <div
                aria-current='page'
                className={`${classes.footerlink} ${classes.navLink}`}
              >
                <a href='/'>Home</a>
              </div>
              <div className={`${classes.footerlink} ${classes.navLink}`}>
                <a href='/events'>Events</a>
              </div>
              <div className={`${classes.footerlink} ${classes.navLink}`}>
                <a href='https://docs.google.com/document/d/1jRucEzPliQFMyHNJ87l-4Q3br8EcPv0_HPgkKTX51Vo/edit#heading=h.n2ak0bmfqkfh'>
                  FAQs
                </a>
              </div>
            </div>
  
            <div className={classes.footerContactWrapper}>
              <a
              href='#'
                className={classes.footerlink}
                style={{marginBottom:'2rem'}}
              >
                Conatct Us!
              </a>
              <div>
                <a
                  href='mailto:tech.council@iitdh.ac.in'
                  className={classes.footerlink}
                >
                  tech.council@iitdh.ac.in
                </a>
              </div>
              <div>
                <a href='mailto:oss@iitdh.ac.in' className={classes.footera}>
                  oss@iitdh.ac.in
                </a>
              </div>
            </div>
            <div className={classes.rightFooterWrapper}>
              <div className={classes.footerIconsWrapper}>
                <a
                  href='https://www.instagram.com/technical.council_iitdh/'
                  target='_blank'
                  className={classes.footera}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href='https://www.github.com/oss2019/'
                  target='_blank'
                  className={classes.footerlink}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
              <div>© Copyright - {year} Technical Council all rights reserved</div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Footer;