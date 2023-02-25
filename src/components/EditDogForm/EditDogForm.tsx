import { useState } from "react"
import { useLocation } from "react-router";

//types
import { DogFormData } from "../../types/forms"
import { User, Dog } from "../../types/models";

interface EditDogFormProps {
  user: User | null;
  handleUpdateDog: (data: Dog) => Promise<void>
}

const EditDogForm = (props: EditDogFormProps): JSX.Element => {
  const { state } = useLocation()
  
  const { user, handleUpdateDog } = props

  const [form, setForm] = useState<Dog>({
    name: state.name,
    age: state.age || '',
    breed: state.breed || '',
    personality: state.personality || '',
    id: state.id,
    ownerId: state.ownerId,
  })

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = (evt: React.ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault()
    handleUpdateDog(form)
  }
  return (
    <>
      <h3>An edit form</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="dogname-input">Name:</label>
        <input type="text" id="dogname-input" name="name" value={form.name} onChange={handleChange} autoComplete='off'/>
        <label htmlFor="age-input">Age:</label>
        <input type="text" id="age-input" name="age" value={form.age?.toString()} onChange={handleChange} autoComplete='off'/>
        <label htmlFor="breed-input">Breed:</label>
        <input type="text" id="breed-input" name="breed" value={form.breed} onChange={handleChange} autoComplete='off'/>
        <label htmlFor="personality-input">Personality, quirks, etc:</label>
        <input type="textarea" id="personality-input" name="personality" value={form.personality} onChange={handleChange} autoComplete='off'/>
        <button type="submit">Update Dog</button>
      </form>
    </>
  )
}

export default EditDogForm