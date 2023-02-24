//types
import { Dog } from '../../types/models'


interface DogCardProps {
  dog: Dog;
}

const DogCard = (props: DogCardProps): JSX.Element => {
  const { dog } = props

  return (
    <>
      <h2>{dog.name}</h2>
      {dog.age &&
      <h4>{dog.age} year(s) old</h4>}
      {dog.breed &&
      <h4>{dog.breed}</h4>}
      {dog.personality &&
      <h4>{dog.personality}</h4>}
      {dog.photo &&
      <img src={dog.photo} alt={`dog ${dog.name}`} style={{width: '300px'}}/>}
    </>
  )
}

export default DogCard