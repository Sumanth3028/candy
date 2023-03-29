
import axios from "axios"

const baseURL = 'https://crudcrud.com/api/b6912ddf05ac4979a8035df0f61dd7c5'

export const  addCandyService =  async(data) => {
 
   await axios.post(`${baseURL}/candydata`, data)

}

export const getCandyService = async() => {
   const res =  await axios.get(`${baseURL}/candydata`)
   // console.log(res)
   return res
}


export const  addCartCandyService =  async(id) => {
 
   let data = await axios.get(`${baseURL}/candydata/${id}`)
   
   console.log('from sert', data)
   await axios.post(`${baseURL}/cartdata`, data)

}

export const getCartCandyService = async() => {
   const res =  await axios.get(`${baseURL}/cartdata`)
   // console.log(res)
   return res
}

