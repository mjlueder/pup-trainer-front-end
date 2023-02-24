// services
import * as tokenService from './tokenService'

// types
import { Dog } from '../types/models'

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

// async function getMyDogs(): Promise<Dog[]> {
//   try {
//     const res = await fetch(BASE_URL, {
//       headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
//     })
//     return await res.json() as Dog[]
//   } catch (error) {
//     console.log(error);
//     throw error
//   }
// }

export { 
  getAllDogs,

}