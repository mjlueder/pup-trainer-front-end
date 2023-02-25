import { useState } from "react"
import { useLocation } from "react-router";

//types
import { DogFormData } from "../../types/forms"
import { User } from "../../types/models";

interface EditDogFormProps {
  user: User | null;
  // handleAddDog: (form: DogFormData) => void;
}

const EditDogForm = (props: EditDogFormProps): JSX.Element => {
  const { state } = useLocation()
  console.log('Dog? state ', state);
  
  const { user } = props

  const [form, setForm] = useState<DogFormData>({
    name: state.name,
    age: state.age,
    breed: state.breed,
    personality: state.personality,
  })

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = (evt: React.ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault()
    // handleAddDog(form)
  }
  return (
    <>
      <h3>An edit form</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="dogname-input">Name:</label>
        <input type="text" id="dogname-input" name="name" value={form.name} onChange={handleChange} autoComplete='off'/>
        <label htmlFor="age-input">Age:</label>
        <input type="number" id="age-input" name="age" value={form.age} onChange={handleChange} autoComplete='off'/>
        <label htmlFor="breed-input">Breed:</label>
        <input type="text" id="breed-input" name="breed" value={form.breed} onChange={handleChange} autoComplete='off'/>
        <label htmlFor="personality-input">Personality, quirks, etc:</label>
        <input type="text" id="personality-input" name="personality" value={form.personality} onChange={handleChange} autoComplete='off'/>
        <button type="submit">Add Dog</button>
      </form>
    </>
  )
}

export default EditDogForm