import styles from './NavBar.module.css'

import DogHouse from '../../assets/dog-house.png'
import Logout from '../../assets/logout.png'
import Login from '../../assets/login.png'
import Signup from '../../assets/signup.png'
import Info from '../../assets/info.png'
import Sit from '../../assets/dog-sit.png'
import Paw from '../../assets/paws.png'

// npm modules
import { NavLink } from 'react-router-dom'

// types
import { User } from '../../types/models'

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
  width: number;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout, width } = props
  
  return (
    <nav className={styles.nav}>
      {user ?
        <ul className={styles.components}>
          <NavLink to="/">
            <img src={DogHouse} alt="home button dog house" className={styles.homeIcon}/>
          </NavLink>
          <div className={styles.dogLinks}>
            <li>
              { width < 500 ?
              <NavLink to="/about">
                <img src={Info} alt="info icon - About Pup Trainer" className={styles.infoIcon}/>
              </NavLink>
              :
              <NavLink to="/about">About</NavLink>
              }
            </li>
            {width > 500 && 
            <h2>🐾</h2>}
            <li>
              { width < 500 ?
              <NavLink to="/profile">
                <img src={Paw} alt="" className={styles.pawsIcon}/>
              </NavLink>
              :
              <NavLink to="/profile">My Dogs</NavLink>
              }
            </li>
            {width > 500 && 
            <h2>🐾</h2>}
            <li>
              { width < 500 ?
              <NavLink to="/resources">
                <img src={Sit} alt="sitting dog - training resources" className={styles.sitIcon}/>
              </NavLink>
              :
              <NavLink to="/resources">Training Resources</NavLink>
              }
            </li>
          </div>

            {/* Commented out for possible future use */}

            {/* <li>
              <NavLink to="/dogs">All Dogs</NavLink>
            </li> */}
          {/* <li><NavLink to="/change-password">Change Password</NavLink></li> */}

          <li>
            <NavLink to="" onClick={handleLogout}>
              <img src={Logout} alt="logout icon man and dog walking away" className={styles.logoutIcon}/>
            </NavLink>
          </li>
        </ul>
      :
        <ul className={styles.components}>
          <div className={styles.guestLinks}>
            <NavLink to="/"><img src={DogHouse} alt="dog house icon" className={styles.homeIcon}/></NavLink>
            <li>
              { width < 500 ?
                <NavLink to="/about">
                  <img src={Info} alt="info icon - About Pup Trainer" className={styles.infoIcon}/>
                </NavLink>
                :
                <NavLink to="/about">About</NavLink>
              }
            </li>
            <li>
              { width < 500 ?
                <NavLink to="/resources">
                  <img src={Sit} alt="sitting dog - training resources" className={styles.sitIcon}/>
                </NavLink>
                :
                <NavLink to="/resources">🐾 Training Resources 🐾</NavLink>
              }
            </li>
          </div>

          {/* Commented out for possible future use */}
          
          {/* <li><NavLink to="/dogs">All Dogs</NavLink></li> */}

          <div className={styles.anotherLinkClass}>
            <li>
              <NavLink to="/login" className={styles.joinLinks}>
                <img src={Login} alt="login icon" />
                <p>Login</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" className={styles.joinLinks}>
                <img src={Signup} alt="signup icon" />
                <p>Sign Up</p>
              </NavLink>
            </li>
          </div>
        </ul>
      }
    </nav>
  )
}

export default NavBar
