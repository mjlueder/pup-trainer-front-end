import { useState, useEffect } from "react"

// types
import { Dog, User } from "../../types/models"

interface NewDogProps {
  user: User | null;
}

//components
import NewDogForm from "../../components/NewDogForm/NewDogForm"

const NewDog = (props: NewDogProps): JSX.Element => {
  

  return (
    <>
      <h1>New Dog Page</h1>
      <NewDogForm />
    </>
  )
}

export default NewDog