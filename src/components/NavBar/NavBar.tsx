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
              <NavLink to="/about">About</NavLink>
            </li>
            {width > 500 && 
            <h2>🐾</h2>}
            <li>
              <NavLink to="/profile">My Dogs</NavLink>
            </li>
            {width > 500 && 
            <h2>🐾</h2>}
            <li>
              <NavLink to="/resources">Training Resources</NavLink>
            </li>
            {width > 500 && 
            <h2>🐾</h2>}
            <li>
              <NavLink to="/dogs">All Dogs</NavLink>
            </li>
          </div>
          <li>
            <NavLink to="" onClick={handleLogout}>
              <img src={Logout} alt="logout icon man and dog walking away" className={styles.logoutIcon}/>
            </NavLink>
          </li>
        </ul>
      :
        <ul className={styles.components}>
          <NavLink to="/"><img src={DogHouse} alt="dog house icon" className={styles.homeIcon}/></NavLink>
          <div className={styles.guestLinks}>
            <li>
                <NavLink to="/about">About 🐾&nbsp;</NavLink>
            </li>
            <li>
                <NavLink to="/resources"> Training Resources 🐾</NavLink>
            </li>
            <li><NavLink to="/dogs">&nbsp;All Dogs</NavLink></li>
          </div>
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
