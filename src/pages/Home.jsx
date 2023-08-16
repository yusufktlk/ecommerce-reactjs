import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addBasket } from '../redux/basketTool'
import { useEffect, useState } from 'react'

function Home({users}) {

  const [products,setProducts] = useState([])

  useEffect(() => {
    const data = axios.get('https://fakestoreapi.com/products')
    .then(res => setProducts(res.data))
  }, [])

    
  const dispatch = useDispatch()
  
  

  return (
    <div>
      <h1 className='text-center mt-6 text-4xl font-mono'>Welcome {users?.email}</h1>
      <div className='grid  md:grid-cols-4 gap-y-20 mx-24 md:gap-x-28 mt-20 mb-12  '>
        {
          products.map((product,key) => (
            <div key={key} className='border-4 border-pink-300 rounded-xl p-4 ' >
              <img src={product.image} className='w-full md:w-[225px] h-[250px] ' />
              <div className='flex flex-col items-center h-[150px] '>
                <p className='text-sm w-[240px]  font-thin text-center h-[60px] mt-4'>{product.title}</p>
                <p className='text-2xl font-bold text-pink '>${product.price}</p>
                <button onClick={() => dispatch(addBasket(product))} className='bg-black text-white rounded-xl p-1 mt-3 w-[200px] hover:scale-105 duration-500'>Add to Card</button>
              </div>
            
            </div>  
          ))
        }
      </div>
    </div>
  )
}

export default Home