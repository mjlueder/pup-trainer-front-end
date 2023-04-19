import { useEffect } from "react";

// types
import { Dog, User } from "../../types/models"
import { DogFormData } from "../../types/forms";

interface NewDogProps {
  user: User | null;
  handleAddDog: (form: DogFormData, photo: File | null) => void;
  handlePageChange: () => void;
}

//components
import NewDogForm from "../../components/NewDogForm/NewDogForm"

const NewDog = (props: NewDogProps): JSX.Element => {
  const { user, handleAddDog, handlePageChange } = props

  useEffect(() => {
    handlePageChange()
  }, [])

  return (
    <>
      <NewDogForm user={user} handleAddDog={handleAddDog}/>
    </>
  )
}

export default NewDog



//* Yes, this component is useless! Will refactor 