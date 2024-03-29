import { Link } from 'react-router-dom'

import styles from './Profiles.module.css'

import Collar from '../../assets/collar-color.png'

// npm packages
import { useState, useEffect } from 'react'

// services
import * as profileService from '../../services/profileService'

// types
import { Profile, User, Dog } from '../../types/models'

// components
import DogCard from '../../components/DogCard/DogCard'

interface ProfilesProps {
  user: User | null;
  handleDeleteDog: (id: number) => Promise<void>;
  dogs: Dog[];
  handlePageChange: () => void;
}

const Profiles = (props: ProfilesProps): JSX.Element => {
  const { user, handleDeleteDog, dogs, handlePageChange } = props
  
  const [profiles, setProfiles] = useState<Profile[]>([])

  useEffect(() => {
    handlePageChange()
  }, [])

  useEffect((): void => {
    const fetchProfiles = async (): Promise<void> => {
      try {
        const profileData: Profile[] = await profileService.getAllProfiles()
        setProfiles(profileData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProfiles()
  }, [dogs])

  if(!profiles.length) return <h3 className={styles.loadingText}>Loading your profile</h3>
  

  return (
    <main >
      {profiles.map((profile: Profile) => 
        <div key={profile.id}>
          {profile.id === user?.profile.id 
            ? 
            <div>
              <div className={styles.profile}>
                <div className={styles.header}>
                  <h1>{profile.name}'s</h1>
                  <img src={Collar} alt="dog collar" /> 
                  <h1>Dogs</h1>
                </div>
              </div>
                <div className={styles.dogList}>
                <Link to="/dogs/new" className={styles.addDog}>
                  <button>Add a Dog</button>
                </Link>
                  {profile.dogs?.map((dog: Dog) => (
                    <div key={dog.id} className={styles.dogCard}>
                      < DogCard  user={user} dog={dog} handleDeleteDog={handleDeleteDog}/>
                      {user?.profile.id === dog.ownerId &&
                        <div className={styles.buttons}>
                          <button onClick={() => handleDeleteDog(dog.id)}>Remove Dog</button>
                          <Link to={`/dogs/${dog.id}/edit`} state={dog}>
                            <button>Edit Dog</button>
                          </Link>
                        </div>
                      }
                    </div>
                  ))}
                </div>
              </div>
            : <></>
          }
        </div>
      )}
    </main>
  )
}

export default Profiles
