import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cards from '../components/Cards'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../redux/Slice'

const DetailPage = () => {
    
    const [data,setData]=useState([''])
    const{id}=useParams()
    const dispatch=useDispatch()

    let carts=useSelector((state)=>state.datafetch.cart)
    useEffect(()=>{
        const fetchSingleData= async ()=>{
            try{

                let response= await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
                setData(response.data)
            }
            catch(e){
                console.log(e.message);
            }
        }
        fetchSingleData()
    },[id])
    console.log(data,'sid');
    const handleAddCart = () => {
        console.log(id);
            dispatch(addCart(data));
        };
    
  return (
    <div>
        <div className='w-100'>
           <img className='w-[40rem] rounded object-cover h-[30rem] m-auto' src={data.images && data.images.length > 0 ? data.images[0].replace(/[\[\]"]+/g, '') : ''} alt="" />
        </div>
        <div className='flex sm:w-[35%] w-full items-center flex-wrap m-auto justify-around'> 

            <h2 className='border-b-4 border-blue-400 text-[1.5rem] font-serif'>{data.title}</h2>
        <div className='flex-col mt-6  w-[50%]'>
            <p className='font-bold text-[14px]'>{data.description}</p>
        </div>
        <div className=' flex-col'>
            <h2 className='bg-pink-300 rounded shadow text-center  mt-2 text-[1.5rem]'>${data.price}</h2>
            <h2 className='font-medium'> Category : {data?.category?.name}</h2>
            <h2 className='font-medium'> updated at :{new Date(data.updatedAt).toLocaleDateString()}</h2>
            <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleAddCart}>Add to cart</button>
        </div>
        </div>

            <h1 className='text-center text-[2rem] '><span className='border-b-4'>Photos</span></h1>
        <div className='flex  flex-wrap mt-6 ml-6'>
            {data?.images?.map((item)=>(
                
<img class="h-auto max-w-lg w-[20rem] m-auto transition-all duration-300 rounded-lg blur-sm hover:blur-none" src={item && item.length > 0 ? item[0].replace(/[\[\]"]+/g, '') : ''} alt="image description"/>

            ))}
        </div>
    </div> 
  )
}

export default DetailPage