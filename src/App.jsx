import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Home from './pages/Home'
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import Basket from './pages/Basket';
import { Provider } from 'react-redux';
import store from './store';


function App() {

  const [users, setUsers] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUsers(user)
      } else {
        // User is signed out

      }
    });
  }, [])
  


  return (
    <>
    <Provider store={store}>
      <Router>
        {users?.accessToken && <Navbar users={users} />}
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="shop" element={<Home users={users} />} />
        <Route path="basket" element={<Basket />} />
      </Routes>
    </Router>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="dark"
    />
    </Provider>
    </>
  )
}

export default App
