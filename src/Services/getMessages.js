import {
    collection,
    onSnapshot,
    query,
    orderBy
} from 'firebase/firestore'
import { db } from '../APIIntegration/firebase'
function getMessages(roomId, callback) {
    return onSnapshot(
        query(
            collection(db, 'chat-rooms', roomId, 'messages'),
            orderBy('timestamp', 'asc')
        ) ,
        (snap) => {
            const messages = snap.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            callback(messages)
        }
    )
}

export { getMessages} 