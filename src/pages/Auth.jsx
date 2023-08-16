import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../../firebase'
import { toast } from 'react-toastify'


function Auth() {
    const [signup, setSignUp] = useState(true)
    const [authData, setAuthData] = useState({email: "" , password: ""})


    const onChangeFunc = (e) => {
        setAuthData({...authData, [e.target.name] : e.target.value})
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            authFunc()
          }
    }

    const authFunc = async() => {
        if(signup){
            // Register
            try {
                const data = await createUserWithEmailAndPassword(auth, authData.email, authData.password)
                const user = data.user;
                if(user){
                    window.location = './shop'
                }
            } catch (error) {
                toast.error(error.message)
            }
        }else{
            //login
            try {
                const data = await signInWithEmailAndPassword(auth, authData.email, authData.password)
                const user = data.user;
                if(user){
                    window.location = './shop'
                }
            } catch (error) {
                toast.error(error.message)
            }
        }
    }


  return (
    <div>
        <div className='text-center mt-44 flex flex-col'>
            <h1 className='text-5xl'>{signup ? "Register" : "Login"}</h1>
            <input onChange={onChangeFunc} onKeyDown={handleKeyDown} value={authData.email} name='email' type='email' placeholder='E-mail' className='m-auto border border-pink-500 p-2 rounded-lg mt-12 w-80 font-mono text-xl'/> <br />
            <input onChange={onChangeFunc} onKeyDown={handleKeyDown} value={authData.password} name='password' type='password' placeholder='Password' className='m-auto border border-pink-500 p-2 rounded-lg  w-80 font-mono text-xl' />
            <p className='font-mono mt-3 text-sm'>{signup ? "Are you have already account?" : "Don't have an account?"} 
                <span onClick={() => setSignUp(!signup)} className='text-pink-500 font-bold cursor-pointer ml-2'>{signup ? "Login" : "Register"}</span>
            </p>
            <button onClick={authFunc}  className='mt-5 bg-pink-300 w-80 m-auto rounded-lg p-3 font-mono text-2xl font-bold'>{signup ? "Register": "Login"}</button>
        </div>
    </div>
  )
}

export default Auth