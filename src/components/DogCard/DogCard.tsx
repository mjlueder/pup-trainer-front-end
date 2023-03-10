import styles from './DogCard.module.css'

import { Link } from 'react-router-dom';

import DefaultDog from '../../assets/default-dog.png'

//types
import { Dog, User } from '../../types/models'

interface DogCardProps {
  dog: Dog;
  user: User | null;
  handleDeleteDog: (id: number) => Promise<void>
}

const DogCard = (props: DogCardProps): JSX.Element => {
  const { dog, user, handleDeleteDog } = props

  return (
    <div className={styles.card} >
      <div className={styles.text}>
        <h2 className={styles.name}>{dog.name}</h2>
        <div className={styles.details}>
          {dog.age &&
          <h4>Age: {dog.age}</h4>}
          {dog.breed &&
          <h4>Breed:  {dog.breed}</h4>}
          {dog.personality &&
          <h4>Personality:  {dog.personality}</h4>}
        </div>
      </div>
      <img 
        src={dog.photo ? dog.photo : DefaultDog} 
        className={styles.img}
        alt={`dog ${dog.name}`} 
      />
    </div>
  )
}

export default DogCard