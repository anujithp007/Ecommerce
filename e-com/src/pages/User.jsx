import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'

const User = () => {
    const [data,setData]=useState([''])
    useEffect(()=>{

        const fetchUser= async ()=>{
            try{

                let response= await axios.get('https://api.escuelajs.co/api/v1/users')
                setData(response.data)
            }
            catch(e){
                console.log(e.message);
            }
        }
        fetchUser()
    },[])
    console.log(data,'user');
  return (
    <div className='flex flex-wrap justify-center items-center gap-10'>
        {data.map((item)=>(
            <UserCard avathar={item.avatar} name={item.name} email={item.email} creationAt={item.creationAt} role={item.role}/>
        ))}
        </div>

  )
}

export default User