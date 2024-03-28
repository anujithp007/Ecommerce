import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import { CategoryCard } from '../components/CategoryCard'
import { Link } from 'react-router-dom'

const Category = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        const fetchCategory=async ()=>{
            try{

                let response=await axios.get('https://api.escuelajs.co/api/v1/categories')
                setData(response.data)
            }
            catch(e){
                console.log(e.message);
            }
        }

        fetchCategory()
    },[])
    console.log(data,'cdt');
  return (
    <div className='flex flex-wrap justify-center gap-9'>
        {data.map((item)=>(
           
       <Link to={`/categorydetail/${item.id}`}>

<CategoryCard name={item.name} image={item.image} updatedAt={new Date(item.updatedAt).toLocaleDateString()} />
       </Link>
          
            
        ))}
    </div>
  )
}

export default Category