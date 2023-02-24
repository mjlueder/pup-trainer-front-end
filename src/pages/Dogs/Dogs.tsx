import { useState, useEffect } from 'react'

//services


// types
import { Dog } from '../../types/models';

interface DogsProps {
  dogs: Dog[];
}

// components
import DogCard from '../../components/DogCard/DogCard'

const Dogs = (props: DogsProps): JSX.Element => {
  const { dogs } = props

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