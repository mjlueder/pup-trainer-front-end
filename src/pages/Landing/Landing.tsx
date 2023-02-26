import Logo from '../../assets/landing.png'
import Collar from '../../assets/collar-color.png'

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
      <div className={styles.title}>
        <h1>Pup</h1> 
        <img src={Collar} alt="dog collar" /> 
        <h1>Trainer</h1>
      </div>
      <h2 className={styles.slogan}>
        Dog training made simple
      </h2>
      <h4 className={styles.description}>
        Training is a wonderful way to bond with your dog, and to teach them how to interact with the human world. When your dog knows what to do, life is more for fun and relaxed for everyone. The internet is full of resources and opinions, but sorting through them to find good ones can be daunting.
      </h4>
      <h4 className={styles.description}>
        Pup Trainer is here to connect you with legitimate, positive, and effective training materials online, so you and your dog can get right to the fun.
      </h4>
      <img src={Logo} alt="dog face" className={styles.img}/>
    </main>
  )
}

export default Landing
