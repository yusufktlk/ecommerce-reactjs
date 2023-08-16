import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeBasket } from '../redux/basketTool'


function Basket() {
  const dispatch = useDispatch()

  const {basket} = useSelector(product => product.user)
  console.log(basket)

  
  
  return (
    <div>
      <h1 className='text-center text-5xl font-bold mt-4'>Basket</h1>
     <div className='mt-12 md:ml-[300px] border-2 border-black md:w-[1000px] rounded-lg '>
     {
        basket?.map((item) => (
          <div key={item.id} hidden={item.quantity==0} className='flex justify-between items-center gap-x-12 mt-4 mb-4 ml-4 md:ml-12'>
             <div className='flex md:gap-x-12 items-center'>
                <img src={item.image} className='w-12' />
                <p className='text-sm md:text-lg'>{item.title}</p>
                <h1 className='text-lg md:text-3xl'>{item.quantity}x</h1>
              </div>
              <div className='flex'>
              <p className='font-bold mr-14'>${item.price*item.quantity}</p>
              <button onClick={() => dispatch(removeBasket(item))} disabled={item.quantity===0}  className='bg-red-400 rounded-lg p-2 mr-4'>Remove</button>
              </div>   
          </div>
          
        ))
      }
      
     </div>
    </div>
  )
}

export default Basket