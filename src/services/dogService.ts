// services
import * as tokenService from './tokenService'

// types
import { Dog } from '../types/models'
import { DogFormData } from '../types/forms'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/dogs`

async function getAllDogs(): Promise<Dog[]> {
  try {
    const res = await fetch(BASE_URL)
    return await res.json() as Dog[]
  } catch (error) {
    console.log(error);
    throw error
  }
}

const create = async (dogData: DogFormData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST', 
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dogData)
    })
    return res.json()
  } catch (error) {
    throw error
  }
}

const deleteDog = async (id: number): Promise<Dog> => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    throw error
  }
}

export { 
  getAllDogs,
  create,
  deleteDog as delete,
}