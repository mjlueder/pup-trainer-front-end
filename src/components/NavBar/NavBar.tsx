import styles from './NavBar.module.css'

import DogHouse from '../../assets/dog-house.png'
import Logout from '../../assets/logout.png'

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
            <img src={DogHouse} alt="home button dog house" className={styles.icons}/>
          </NavLink>
          <div className={styles.dogLinks}>
            <li><NavLink to="/profile">My Dogs</NavLink></li>
            <li><NavLink to="/dogs/new">Add a Dog</NavLink></li>
            <li><NavLink to="/dogs">All Dogs</NavLink></li>
          </div>
          {/* <li><NavLink to="/change-password">Change Password</NavLink></li> */}
          <li>
            <NavLink to="" onClick={handleLogout}>
              <img src={Logout} alt="logout icon man and dog walking away" className={styles.icons}/>
            </NavLink>
          </li>
        </ul>
      :
        <ul className={styles.components}>
          <NavLink to="/"><img src={DogHouse} alt="paws" className={styles.paws}/></NavLink>
          <li><NavLink to="/dogs">All Dogs</NavLink></li>
          <div className={styles.dogLinks}>
            <li><NavLink to="/login">Log In</NavLink></li>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
          </div>
        </ul>
      }
    </nav>
  )
}

export default NavBar
