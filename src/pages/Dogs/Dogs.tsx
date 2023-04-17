import styles from './Dogs.module.css'

// types
import { Dog, User } from '../../types/models';

interface DogsProps {
  dogs: Dog[];
  user: User | null;
  handleDeleteDog: (id: number) => Promise<void>;
}

// components
import DogCard from '../../components/DogCard/DogCard'

const Dogs = (props: DogsProps): JSX.Element => {
  const { dogs, user, handleDeleteDog } = props

  return (
    <>
      {!user &&
      <h2 className={styles.title}>Log in or sign up to add your own dogs 🐕</h2>}
      <div className={styles.dogList}>
        {dogs.map((dog, idx) => (
          <div key={dog.id} className={styles.dog}>
            <DogCard  dog={dog} user={user} handleDeleteDog={handleDeleteDog}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default Dogs