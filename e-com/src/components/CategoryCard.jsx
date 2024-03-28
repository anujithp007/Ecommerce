import React from 'react'

export const CategoryCard = (props) => {
    
  return (
    <div>
        

<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={props.image} alt="No image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.name}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Updated at{props.updatedAt}</span>
       
    </div>
</div>

    </div>
  )
}
