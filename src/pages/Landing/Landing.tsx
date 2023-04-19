import Logo from '../../assets/landing.png'
import Collar from '../../assets/collar-color.png'

// stylesheets
import styles from './Landing.module.css'

// types
import { User } from '../../types/models'
import { useEffect } from 'react';

interface LandingProps {
  user: User | null;
  handlePageChange: () => void;
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user, handlePageChange } = props

  useEffect(() => {
    handlePageChange()
  }, [])

  return (
    <main className={styles.container}>
      <div className={styles.title}>
        <h1>Pup</h1> 
        <img src={Collar} alt="dog collar" /> 
        <h1>Trainer</h1>
      </div>
      <h2 className={styles.slogan}>
        Dog training, made simple
      </h2>
      <img src={Logo} alt="dog face" className={styles.img}/>
    </main>
  )
}

export default Landing
