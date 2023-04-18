import { User } from '../../types/models'
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom';
import DogHouse from '../../assets/dog-house.png'

interface SmallScreenProps {
  user: User | null;
  handleLogout: () => void;
  width: number;
  isOpen: boolean;
  handleOpen: () => void;
}

const SmallScreenNav = (props: SmallScreenProps): JSX.Element => {
  const { user, handleLogout, width, isOpen, handleOpen } = props

  return (
    <>
      <nav className={styles.nav}>
        <NavLink to="/">
          <img src={DogHouse} alt="home button dog house" className={styles.homeIcon}/>
        </NavLink>

        <div>
          <button onClick={handleOpen}>
            {isOpen ? 'x' : '≡'}
          </button>

          <div>
            
          {user ?
            <ul >
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/profile">My Dogs</NavLink></li>
              <li><NavLink to="/dogs">All Dogs</NavLink></li>
              <li><NavLink to="/resources">Training Resources</NavLink></li>
              <li><NavLink to="" onClick={handleLogout}>Logout</NavLink></li>
            </ul>
          :
            <ul >
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/resources">Training Resources</NavLink></li>
              <li><NavLink to="/dogs">All Dogs</NavLink></li>
              <li><NavLink to="/login" >Login</NavLink></li>
              <li><NavLink to="/signup">Sign Up</NavLink></li>
            </ul>
          }

          </div>
        </div>
      </nav>
    </>
  )
}

export default SmallScreenNav