import React from 'react'
import { FaBlog} from 'react-icons/fa'
import { FcSms} from 'react-icons/fc'
import {CgProfile} from 'react-icons/cg'
import { signOut} from 'firebase/auth'
import { auth } from '../APIIntegration/firebase';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { MdLogout} from 'react-icons/md'
import './navbar.css'
const Navbar = () => {
    const navigate = useNavigate()
    const {currentUser} = useAuth()
    async function handleLogout(){
        try {
          await signOut(auth);
          navigate('/');
        }
        catch (error){
          console.log(error)
        }
      }
    return (
            <nav>
                <ul>
                    <li>
                        <h2><FaBlog /></h2>
                        
                    </li>
                    
                        <Link to='/messages'>
                        <li>
                        <h2><FcSms /></h2>
                        
                        </li>
                        </Link>
                    
                    
                    <Link to='/profile'>
                    <li>
                        <h2><CgProfile /></h2>
                        <h2>{currentUser.displayName }</h2>
                        </li>
                        </Link>
                    
                    <button onClick={handleLogout}><MdLogout /></button>
           
                </ul>
            </nav>
                
    )
}

export default Navbar 