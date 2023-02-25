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

  console.log('USER ', user);
  console.log('Dog ', dog);
  
  

  return (
    <>
      <h2>{dog.name}</h2>
     
      <h4>{dog.age} year old</h4>
      
      {dog.breed &&
      <h4>{dog.breed}</h4>}
      {dog.personality &&
      <h4>{dog.personality}</h4>}
      <img src={dog.photo ? dog.photo : DefaultDog} alt={`dog ${dog.name}`} style={{width: '300px'}}/>
      {/* {user?.profile.id === dog.ownerId &&
        <div>
          <button onClick={() => handleDeleteDog(dog.id)}>Remove Dog</button>
          <Link to={`/dogs/${dog.id}`}>
            <button>Edit Dog</button>
          </Link>
        </div>
      } */}
    </>
  )
}

export default DogCard