import { useState, useEffect } from "react"

// types
import { Dog, User } from "../../types/models"
import { DogFormData } from "../../types/forms";

interface NewDogProps {
  user: User | null;
  handleAddDog: (form: DogFormData, photo: File | null) => void;
}

//components
import NewDogForm from "../../components/NewDogForm/NewDogForm"

const NewDog = (props: NewDogProps): JSX.Element => {
  const { user, handleAddDog } = props

  return (
    <>
      <h1>New Dog Page</h1>
      <NewDogForm user={user} handleAddDog={handleAddDog}/>
    </>
  )
}

export default NewDog