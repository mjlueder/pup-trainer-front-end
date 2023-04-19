import { useEffect } from "react";

//types
import { User, Dog } from "../../types/models";

interface EditDogProps {
  user: User | null;
  handleUpdateDog: (data: Dog) => Promise<void>;
  handlePageChange: () => void;
}

// components
import EditDogForm from "../../components/EditDogForm/EditDogForm"
import { DogFormData } from "../../types/forms";

const EditDog = (props: EditDogProps): JSX.Element => {
  const { user, handleUpdateDog, handlePageChange } = props

  useEffect(() => {
    handlePageChange()
  }, [])
  
  return (
    <>
      <EditDogForm user={user} handleUpdateDog={handleUpdateDog}/>
    </>
  )
}

export default EditDog




//* Yes, this component is useless! Will refactor 