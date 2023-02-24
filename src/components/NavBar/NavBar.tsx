import Logo from '../../assets/shiba.png'

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
    <nav>
      {user ?
        <ul>
          <NavLink to="/"><img src={Logo} alt="cartoon shiba" /></NavLink>
          <li><NavLink to="/profile">My Dogs</NavLink></li>
          <li><NavLink to="/dogs/new">Add a Dog</NavLink></li>
          <li><NavLink to="/dogs">All Dogs</NavLink></li>
          {/* <li><NavLink to="/change-password">Change Password</NavLink></li> */}
          <li><NavLink to="" onClick={handleLogout}>Log Out</NavLink></li>
        </ul>
      :
        <ul>
          <li><NavLink to="/dogs">All Dogs</NavLink></li>
          <li><NavLink to="/login">Log In</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
