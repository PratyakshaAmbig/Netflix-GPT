import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO } from '../utils/constant';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store)=> store.user);
  useEffect(()=>{
    if(user){
      navigate('/browse');
    }else{
      navigate('/')
  }
  },[user])
  

  const handleSignOut = ()=>{
    dispatch(removeUser())
  }
  return (
    <div className='absolute flex justify-between w-full px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img
       className='w-44'
       src={LOGO}
       alt='logo'
       />
       {
        user &&(
          <div className='flex p-2 items-center gap-1'>
         <img
         className='w-9 h-9 rounded'
         alt='userIcon'
         src={user?.photoURL}
         />
         <button onClick={handleSignOut} className='font-bold text-white cursor-pointer '>(Sign Out)</button>
       </div>
        )
       }
    </div>
  )
}

export default Header
