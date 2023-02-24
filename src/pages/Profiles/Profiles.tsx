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
  handleDeleteDog: () => Promise<void>;
}

const Profiles = (props: ProfilesProps): JSX.Element => {
  const { user, handleDeleteDog } = props
  // console.log('USER ', user);
  

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
  }, [])

  if(!profiles.length) return <p>No profiles yet</p>

  // if(profiles) console.log(profiles)
  

  return (
    <>
      <h1>My Dogs</h1>
      {profiles.map((profile: Profile) => 
        <div key={profile.id}>
          {profile.id === user?.profile.id 
            ? 
              <div>
                <p>{profile.name}</p>
                {profile.photo &&
                <img src={profile.photo} alt={`${profile.name}'s avatar`} style={{width: '200px'}}/>
                }
                {profile.dogs?.map((dog: Dog) => (
                  < DogCard key={dog.id} dog={dog} handleDeleteDog={handleDeleteDog}/>
                ))}
              </div>
            : <></>
            
          }
        </div>
      )}
    </>
  )
}
 
export default Profiles
