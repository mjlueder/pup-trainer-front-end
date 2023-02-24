import { useState, useEffect } from 'react'

//services


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
      <h1>cute dogs!</h1>
      {dogs.map((dog) => (
        // <h3 key={dog.id}>{dog.name}</h3>
        <DogCard key={dog.id} dog={dog} user={user} handleDeleteDog={handleDeleteDog}/>
      ))}
    </>
  )
}

export default Dogs