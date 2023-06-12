import React from 'react'
import { useAuth } from '../Context/AuthContext';
import NavBar from './Navbar'
import { Link } from 'react-router-dom';
import { chatrooms } from '../Chatapp/Groups';

import { useNavigate } from 'react-router-dom';
import  styled from 'styled-components'
const Dashboard = () => {
   const {currentUser} = useAuth()
  
    const navigate = useNavigate()
    const Rooms = styled.div `
       display: flex;
       flex-direction: row;
       flex-wrap: wrap;
       gap: 20px;
    `

    const RoomButton = styled.button `
        width: 50vw;
        height: 50px; 
        background-color: blue;
        color: white;
        margin-bottom:0.6em;
    `
  //  async function handleLogout(){
  //     try {
  //       await signOut(auth);
  //       navigate('/');
  //     }
  //     catch (error){
  //       console.log(error)
  //     }
  //   }
        if (currentUser) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          
          return (
            <>
            <NavBar />
            
            
              
              <Link to='/messages'>Messaging</Link>
              <div>
                {chatrooms.map((room) => {
                  return (
                    <Rooms key={room.id}>
                    <Link to={`/rooms/${room.id}`}><RoomButton>{room.title}</RoomButton></Link>
                    </Rooms>
                  )
                })}
              </div>
              </>
          )
          // ...
        } else {
          // User is signed out
          // ...
          return (
            <>
            {navigate('/login')}
    
            </>
        )
        }
    
    
}

export default Dashboard