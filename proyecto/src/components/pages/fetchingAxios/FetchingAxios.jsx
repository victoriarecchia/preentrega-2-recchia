import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../../api/axiosInstance';

export const FetchingAxios = () => {


  const [users, setUsers] = useState();

  useEffect(() => {

    // CON AXIOS
    const getUser = axiosInstance.get("/users") 
    getUser
    .then(res=> setUsers(res.data))
    .catch(err=> console.log(err))

    axiosInstance.post("/users", users)
  }, [])
  console.log(users); 


  return (
    <>
    </>
  )
}
