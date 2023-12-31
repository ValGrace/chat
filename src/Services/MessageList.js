import React from 'react'
import { useAuth } from '../Context/AuthContext'
import { useMessages } from './useMessages'
import './messages.css'
function MessageList({ roomId}) {
    const containerRef = React.useRef(null)
    const {currentUser} = useAuth()
    const messages = useMessages(roomId)

    React.useLayoutEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight
        }
    })

    return (
        <div className="message-list-container" ref={containerRef}>
            <ul className="message-list">
                {messages.map((x) => (
                    <Message
                       key={x.id}
                       message={x}
                       isOwnMessage={x.uid === currentUser.uid}
                       />
                ))}
            </ul>

        </div>
    )
}

function Message({ message, isOwnMessage}) {
    const { displayName, text} = message;
    return (
        <li className={['message', isOwnMessage && 'own-message'].join(' ')}>
            <h4 className='sender'>{isOwnMessage ? 'You' : displayName}</h4>
            <div>{text}</div>
        </li>
    )

}

export { MessageList}