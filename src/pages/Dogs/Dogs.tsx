import { useState, useEffect } from 'react'

//services
import * as dogService from '../../services/dogService'

// types
import { Dog } from '../../types/models'

// components
import DogCard from '../../components/DogCard/DogCard'

const Dogs = (): JSX.Element => {
  const [dogs, setDogs] = useState<Dog[]>([])

  useEffect((): void => {
    const fetchDogs = async (): Promise<void> => {
      try {
        const dogData: Dog[] = await dogService.getAllDogs()
        setDogs(dogData)
      } catch (error) {
        console.log(error);
      }
    }
    fetchDogs()
  })

  return (
    <>
      <h1>cute dogs!</h1>
      {dogs.map((dog) => (
        // <h3 key={dog.id}>{dog.name}</h3>
        <DogCard key={dog.id} dog={dog}/>
      ))}
    </>
  )
}

export default Dogs