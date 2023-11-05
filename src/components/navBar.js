import { useState, useEffect } from 'react'
import styles from './navBar.module.css'
import image_src from "./TechC_Logo.jpg"

export default function AppBar() {
  const [active, setActive] = useState(false)
  const clickHandler = () => {
    setActive(prevActive => !prevActive)
  }

  const [visible, setVisible] = useState(true)
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const visible = previousScrollPosition > currentScrollPos

      setPreviousScrollPosition(currentScrollPos)
      setVisible(visible)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [previousScrollPosition])

  return (
    <div id='homeId'>
      <nav
        className={styles.navBarWrapper}
        style={{ top: visible ? 0 : '-6rem' }}
      >
        <div className={styles.navBarMain}>
          <div className={styles.logoWrapper}>
            <a href={`/`}>
              <img
                src={image_src}
                width={70}
                height={50}
                alt='ClubPic'
                priority
              />
            </a>
          </div>
          <div className={styles.optionsWrapper}>
            <div
              className={`${styles.optionsMenu} ${
                active && styles.activeSidebar
              } font-sans`}
            >
              <div className={styles.option}>
                <a href={`/`} scroll={false}>
                  <div>Clubs</div>
                </a>
              </div>
              <div className={styles.option}>
                <a href={`/`} scroll={false}>
                  <div>About Us</div>
                </a>
              </div>
              <div className={styles.option}>
                <a href={`/`} scroll={false}>
                  <div>Members</div>
                </a>
              </div>
              <div className={styles.option}>
                <a href={`/`} scroll={false}>
                  <div>Events</div>
                </a>
              </div>
            </div>
            <div className={styles.hamBurgerWrapper}>
              <div
                className={`${styles.hamburger} ${
                  active ? styles.active : styles['not-active']
                }`}
                onClick={clickHandler}
              >
                <span className={styles.spans}></span>
                <span className={styles.spans}></span>
                <span className={styles.spans}></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}