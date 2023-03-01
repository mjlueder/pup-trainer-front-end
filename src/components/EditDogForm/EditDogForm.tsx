import { useState } from "react"
import { useLocation } from "react-router";

//types
import { DogFormData } from "../../types/forms"
import { User, Dog } from "../../types/models";

import styles from './EditDogForm.module.css'

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

  const personalityLength: number | undefined = form.personality?.length

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = (evt: React.ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault()
    handleUpdateDog(form)
  }
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Update Your Dog</h1>
      <form onSubmit={handleSubmit} className={styles.formDiv}>
        <label htmlFor="dogname-input">Name:</label>
        <input type="text" id="dogname-input" name="name" value={form.name} onChange={handleChange} autoComplete='off'/>
        <label htmlFor="age-input">Age:</label>
        <input type="text" id="age-input" name="age" value={form.age?.toString()} onChange={handleChange} autoComplete='off'/>
        <label htmlFor="breed-input">Breed:</label>
        <input type="text" id="breed-input" name="breed" value={form.breed} onChange={handleChange} autoComplete='off'/>
        <label htmlFor="personality-input">Personality, quirks, etc:</label>
        <div className={styles.personality}>
          <input type="text" id="personality-input" name="personality" value={form.personality} onChange={handleChange} autoComplete='off' maxLength={1234}/>
          {personalityLength! > 800 ?
          <p>{1234-personalityLength!}/1234 characters left</p> : <></>} 
        </div>
        <div></div>
        <button type="submit" className={styles.submit}>Update Dog</button>
      </form>
    </div>
  )
}

export default EditDogForm