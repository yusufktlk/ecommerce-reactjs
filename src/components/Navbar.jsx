import { signOut } from 'firebase/auth'

import { auth } from '../../firebase'
import { toast } from 'react-toastify'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Navbar(users) {

  const logoutFunc = async() => {
      toast.success('Logging out...')
      await signOut(auth)
      setTimeout(() => {
        window.location = '/'
      }, 3000);
      
  } 
  return (
    <div className='py-5 bg-pink-300 text-center font-bold font-mono flex justify-between'>
        <h1 className='ml-5 text-5xl'>Yushop</h1>
        
        <div className='flex items-center'>
          <Link to="/shop" className='text-2xl mr-4'>Shop</Link>
          <Link to="/basket"><AiOutlineShoppingCart size={32} className='mr-6' /></Link>
          <h1 onClick={logoutFunc} className='text-2xl mr-5 cursor-pointer underline'>Logout</h1>
        </div>
    </div>
  )
}

export default Navbar