import { Link } from 'react-router-dom'

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
                  <>
                    < DogCard key={dog.id} user={user} dog={dog} handleDeleteDog={handleDeleteDog}/>
                    {user?.profile.id === dog.ownerId &&
                      <div>
                        <button onClick={() => handleDeleteDog(dog.id)}>Remove Dog</button>
                        <Link to={`/dogs/${dog.id}/edit`} state={dog}>
                          <button>Edit Dog</button>
                        </Link>
                      </div>
                    }
                  </>
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
