//types
import { User, Dog } from "../../types/models";

interface EditDogProps {
  user: User | null;
  handleUpdateDog: (data: Dog) => Promise<void>
}

// components
import EditDogForm from "../../components/EditDogForm/EditDogForm"
import { DogFormData } from "../../types/forms";

const EditDog = (props: EditDogProps): JSX.Element => {
  const { user, handleUpdateDog } = props

  return (
    <>
      <h1>Edit Dog Page</h1>
      <EditDogForm user={user} handleUpdateDog={handleUpdateDog}/>
    </>
  )
}

export default EditDog