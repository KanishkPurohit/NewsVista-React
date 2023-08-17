import React from 'react'
import loading from './loading.gif'

const Spinner = ()=>{
 
    return (
      <div className='text-center '>
        <img className='my-4' height='40px' src={loading} alt="loadingg" />
      </div>
    )
  
}
export default Spinner