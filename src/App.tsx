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
import About from './pages/About/About'
import Resources from './pages/Resources/Resources'
import SmallScreenNav from './components/NavBar/SmallScreenNav'

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
  const [width, setWidth] = useState<number>(window.innerWidth)
  const [isOpen, setIsOpen] = useState(false)
  
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

  const handleAddDog = async (dogData: DogFormData, photo: File | null): Promise<void> => {
    const newDog = await dogService.create(dogData)
    const newDogWithPhoto = await dogService.addPic(newDog, photo)
    setDogs([newDog, ...dogs])
    navigate('/profile')
  }

  const handleDeleteDog = async (id: number): Promise<void> => {
    await dogService.delete(id)
    setDogs(dogs.filter(dog => dog.id !== id))
  }

  const handleUpdateDog = async (dogData: Dog): Promise<void> => {
    const updatedDog = await dogService.update(dogData)
    setDogs(dogs.map((d) => dogData.id === d.id ? updatedDog : d))
    navigate('/profile')
  }

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handlePageChange = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])

  return (
    <>
      { width < 750 ?
        <SmallScreenNav 
          isOpen={isOpen}
          handleOpen={handleOpen}
          user={user} 
          handleLogout={handleLogout} 
          width={width}
        />
        : 
        <NavBar 
          user={user} 
          handleLogout={handleLogout} 
          width={width}
        />
      }
      <Routes>
        <Route path="/" element={<Landing user={user} handlePageChange={handlePageChange}/>} />
        <Route
          path="/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} handlePageChange={handlePageChange}/>}
        />
        <Route
          path="/login"
          element={<Login handleAuthEvt={handleAuthEvt} handlePageChange={handlePageChange}/>}
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              <Profiles user={user} handleDeleteDog={handleDeleteDog} dogs={dogs} handlePageChange={handlePageChange}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dogs/new"
          element={
            <ProtectedRoute user={user}>
              <NewDog user={user} handleAddDog={handleAddDog} handlePageChange={handlePageChange}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dogs/:id/edit"
          element={
            <ProtectedRoute user={user}>
              <EditDog user={user} handleUpdateDog={handleUpdateDog} handlePageChange={handlePageChange}/>
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
        {/* Saving for possible future use */}
        <Route path="/dogs" element={<Dogs dogs={dogs} user={user} handleDeleteDog={handleDeleteDog} handlePageChange={handlePageChange}/>}/>
        <Route path="/about" element={<About handlePageChange={handlePageChange}/>}/>
        <Route path="/resources" element={<Resources handlePageChange={handlePageChange}/>}/>
      </Routes>
    </>
  )
}

export default App
