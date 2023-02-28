import styles from './NavBar.module.css'

import DogHouse from '../../assets/dog-house.png'
import Logout from '../../assets/logout.png'
import Login from '../../assets/login.png'
import Signup from '../../assets/signup.png'

// npm modules
import { NavLink } from 'react-router-dom'

// types
import { User } from '../../types/models'

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props
  
  return (
    <nav className={styles.nav}>
      {user ?
        <ul className={styles.components}>
          <NavLink to="/">
            <img src={DogHouse} alt="home button dog house" className={styles.homeIcon}/>
          </NavLink>
          <div className={styles.dogLinks}>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <h2>🐾</h2>
            <li>
              <NavLink to="/profile">My Dogs</NavLink>
            </li>
            <h2>🐾</h2>
            <li>
              <NavLink to="/resources">Training Resources</NavLink>
            </li>
            {/* Commented out for possible future use */}
            {/* <li>
              <NavLink to="/dogs">All Dogs</NavLink>
            </li> */}
          </div>
          {/* <li><NavLink to="/change-password">Change Password</NavLink></li> */}
          <li>
            <NavLink to="" onClick={handleLogout}>
              <img src={Logout} alt="logout icon man and dog walking away" className={styles.logoutIcon}/>
            </NavLink>
          </li>
        </ul>
      :
        <ul className={styles.components}>
          <NavLink to="/"><img src={DogHouse} alt="dog house icon" className={styles.homeIcon}/></NavLink>
          {/* <li><NavLink to="/dogs">All Dogs</NavLink></li> */}
          <li>
            <NavLink to="/resources">Training Resources</NavLink>
          </li>
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
