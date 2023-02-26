import { Link } from 'react-router-dom'

import styles from './Profiles.module.css'

// npm packages
import { useState, useEffect } from 'react'
// import { useLocation } from 'react-router-dom'

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
}

const Profiles = (props: ProfilesProps): JSX.Element => {
  const { user, handleDeleteDog, dogs } = props
  
  const [profiles, setProfiles] = useState<Profile[]>([])


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

  if(!profiles.length) return <p>Loading your profile</p>
  

  return (
    <main >
      {profiles.map((profile: Profile) => 
        <div key={profile.id}>
          {profile.id === user?.profile.id 
            ? 
            <div>
              <div className={styles.profile}>
                <p>{profile.name}</p>
                {profile.photo &&
                <img src={profile.photo} alt={`${profile.name}'s avatar`} style={{width: '200px'}}/>
                }
              </div>
              <h1>My Dogs</h1>
                <div className={styles.dogList}>
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
