import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../redux/Slice';
import Cards from '../components/Cards';

const Cart = () => {
    const result = useSelector((state)=>state.datafetch.cart)
    console.log(result,'uj');

    const dispatch=useDispatch()
   
    const handleRemove = (id) => {
        dispatch(removeCart(id)); // Dispatch the removeCart action with the item id
    };
  return (
    <div className='flex flex-wrap gap-3'>
            {result.map((item)=>(
                <>
                <div className='flex-col border-2 '>

                 <Cards title={item.title} price={item.price} image={item.images} />
                 <div>
            <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>handleRemove(item.id)}>Remove</button>
                </div>
                 </div>
                </>
            ))}

    </div>
  )
}

export default Cart