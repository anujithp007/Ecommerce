import React from 'react'
import { useDispatch } from 'react-redux'

const Cards = (props) => {
  

  return (
    <div>
        

<div class="w-full max-w-sm  border-gray-200  dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-8 rounded-t-lg" src={props.images && props.images.length > 0 ? props.images[0].replace(/[\[\]"]+/g, '') : ''} alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
        </a>
       
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">${props.price}</span>
        </div>
    </div>
</div>

    </div>
  )
}

export default Cards