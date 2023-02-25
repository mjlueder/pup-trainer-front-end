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
    <div >
      <h2>{dog.name}</h2>
      {dog.age &&
      <h4>{dog.age} year(s) old</h4>}
      {dog.breed &&
      <h4>{dog.breed}</h4>}
      {dog.personality &&
      <h4>About Me: {dog.personality}</h4>}
      <img src={dog.photo ? dog.photo : DefaultDog} alt={`dog ${dog.name}`} style={{width: '300px'}}/>
    </div>
  )
}

export default DogCard