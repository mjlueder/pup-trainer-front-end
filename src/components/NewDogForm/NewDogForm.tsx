import { useState } from "react"

//types
import { DogFormData } from "../../types/forms"
import { User } from "../../types/models";

interface NewDogFormProps {
  user: User | null;
  handleAddDog: (form: DogFormData) => void;
}

interface Photo {
  photo: File | null;
}

const NewDogForm = (props: NewDogFormProps): JSX.Element => {
  const { user, handleAddDog } = props

  const [photoData, setPhotoData] = useState<Photo>({})
  // const [photoChanged, setPhotoChanged] = useState(false)
  const [form, setForm] = useState<DogFormData>({
    name: '',
    age: 0,
    breed: '',
    personality: ''
  })

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [evt.target.name]: evt.target.value})
  }

  const handleChangePhoto = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPhotoData({ photo: evt.target.files[0] })
    // setPhotoChanged(true)
  }

  const handleSubmit = (evt: React.ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault()
    handleAddDog(form, photoData.photo)
    console.log('HandleSubmit photoData.photo ', photoData.photo);
  }

  return (
    <>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="dogname-input">Name:</label>
        <input type="text" id="dogname-input" name="name" value={form.name} onChange={handleChange} autoComplete='off'/>
        <label htmlFor="age-input">Age:</label>
        <input type="number" id="age-input" name="age" value={form.age} onChange={handleChange} autoComplete='off'/>
        <label htmlFor="breed-input">Breed:</label>
        <input type="text" id="breed-input" name="breed" value={form.breed} onChange={handleChange} autoComplete='off'/>
        <label htmlFor="personality-input">Personality, quirks, etc:</label>
        <input type="text" id="personality-input" name="personality" value={form.personality} onChange={handleChange} autoComplete='off'/>
        <label htmlFor="photo-upload">
              Upload Photo:
            </label>
              {/* <div className={styles.upload}>
                <button 
                  className={styles.button} 
                  onClick={handleClick}
                  form=""
                >
                  Choose File
                </button>
                {photoChanged && 
                  <p className={styles.uploadText}>
                    image uploaded
                  </p>}
              </div> */}
              <input
                type="file"
                id="photo-upload"
                name="photo"
                // ref={hiddenFileInput}
                onChange={handleChangePhoto}
                // className={styles.fileUpload}
              />
        <button type="submit">Add Dog</button>
      </form>
    </>
  )
}

export default NewDogForm