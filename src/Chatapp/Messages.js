import React from 'react'
import { Link, useParams} from 'react-router-dom'
import { chatrooms } from './Groups'
import { MessageInput} from './MessageInput'
import './chatapp.css'
import { MessageList } from '../Services/MessageList'
const Messages = () => {
    const params = useParams()
    const room = chatrooms.find((x) => x.id === params.id)
    if (!room) {
        return (
        <h2>Oops!! The Group you are looking for cannot be found</h2>
        ) 
       }
    return (
        <>
           <h2>{room.title}</h2>
           <h3>Create Room</h3>
           <div>
               <Link to="/dash">Back to all rooms</Link> 
           </div>
           <div className='message-container'>
             <MessageList roomId={room.id} /> 
             <MessageInput roomId={room.id} />
           </div>
        </>
    )
}

export default Messages