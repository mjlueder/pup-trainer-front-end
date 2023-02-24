// npm modules 
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Dogs from './pages/Dogs/Dogs'
import NewDog from './pages/NewDog/NewDog'
import EditDog from './pages/EditDog/EditDog'

// services
import * as authService from './services/authService'
import * as dogService from './services/dogService'

// stylesheets
import './App.css'

// types
import { User, Dog } from './types/models'
import { DogFormData } from './types/forms'

function App(): JSX.Element {
  const navigate = useNavigate()
  
  const [user, setUser] = useState<User | null>(authService.getUser())
  const [dogs, setDogs] = useState<Dog[]>([])

  useEffect((): void => {
    const fetchDogs = async (): Promise<void> => {
      try {
        const dogData: Dog[] = await dogService.getAllDogs()
        setDogs(dogData)
      } catch (error) {
        console.log(error);
      }
    }
    fetchDogs()
  }, [])

  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  const handleAddDog = async (dogData: DogFormData): Promise<void> => {
    const newDog = await dogService.create(dogData)
    setDogs([newDog, ...dogs])
    navigate('/profile')
  }

  const handleDeleteDog = async (id: number): Promise<void> => {
    console.log('Deleted Dog ID ', id);
    
    // const deletedDog = 
    await dogService.delete(id)
    setDogs(dogs.filter(dog => dog.id !== id))
    // navigate('/profile')
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              <Profiles user={user} handleDeleteDog={handleDeleteDog} dogs={dogs}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dogs/new"
          element={
            <ProtectedRoute user={user}>
              <NewDog user={user} handleAddDog={handleAddDog}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dogs/:id"
          element={
            <ProtectedRoute user={user}>
              <EditDog user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        <Route path="/dogs" element={<Dogs dogs={dogs} user={user} handleDeleteDog={handleDeleteDog}/>}/>
      </Routes>
    </>
  )
}

export default App
