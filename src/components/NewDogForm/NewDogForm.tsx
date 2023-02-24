import { useState } from "react"

//types
import { NewDogFormData } from "../../types/forms"

interface NewDogFormProps {
  user: User | null;
}

const NewDogForm = (props: NewDogFormProps): JSX.Element => {
  const { user } = props

  const [formData, setFormData] = useState<NewDogFormData>({
    name: '',
    age: null,
    breed: '',
    personality: ''
  })

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  // const handleSubmit = (evt: React.ChangeEvent<HTMLButtonElement>) => {
  //   evt.preventDefault()
  //   handleAddDog(form)
  // }

  return (
    <>
      <h2>Form</h2>
    </>
  )
}

export default NewDogForm