//types
import { User } from "../../types/models";

interface EditDogProps {
  user: User | null;
}

// components
import EditDogForm from "../../components/EditDogForm/EditDogForm"

const EditDog = (props: EditDogProps): JSX.Element => {
  const { user } = props

  return (
    <>
      <h1>Edit Dog Page</h1>
      <EditDogForm />
    </>
  )
}

export default EditDog