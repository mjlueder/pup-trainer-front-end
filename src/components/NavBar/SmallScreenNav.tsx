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
            {/* {isOpen && <NavLinksList isOpen={isOpen} user={user} handleLogout={handleLogout}/>} */}
          </div>
        </div>
      </nav>
    </>
  )
}

export default SmallScreenNav