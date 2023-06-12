import React, { useState, useRef} from 'react'
import { useAuth } from '../Context/AuthContext'
import { sendPost } from '../Services/sendMessage'
const NewPost = () => {
    const { currentUser} = useAuth()
    const [value, setValue] = useState('')
  

    const handleSubmit = (event) => {
        event.preventDefault()
        sendPost(posts, currentUser, value)
        setValue('')
        
    }
    return (
        <form onSubmit={handleSubmit}>
           
            <input
               type="text"
               placeholder="Post tile"
               value={value}
               onChange={(e) =>  {setValue(e.target.value)}}
               className="message-input"
               required
               minLength={1}
            />
           
            <button type='submit' className="send-post">Post</button>
                  </form>
    )
}