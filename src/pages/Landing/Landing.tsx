import Logo from '../../assets/landing.png'

// stylesheets
import styles from './Landing.module.css'

// types
import { User } from '../../types/models'

interface LandingProps {
  user: User | null;
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user } = props

  return (
    <main className={styles.container}>
      <h1>Welcome to Pup-Trainer!</h1>
      <h4>App description</h4>
      <img src={Logo} alt="dog face" style={{width: '100vw'}}/>
    </main>
  )
}

export default Landing
