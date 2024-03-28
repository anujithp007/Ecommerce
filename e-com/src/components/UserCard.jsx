import React from 'react'

const UserCard = (props) => {
  return (
    <div>
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={props.avathar} alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-serif text-gray-900 dark:text-white">{props.name}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{props.email}</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">creation at <span className='text-red-600'>:{props.creationAt}</span></span>
        <span class="text-sm text-gray-500 dark:text-gray-400">Role :{props.role}</span>
       
    </div>
</div>

    </div>
  )
}

export default UserCard