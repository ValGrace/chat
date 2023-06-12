import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db} from '../APIIntegration/firebase'
async function sendMessage(roomId, user, text) {
    try {
        await addDoc(collection(db, 'chat-rooms', roomId, 'messages'), {
            uid: user.uid,
            displayName: user.displayName,
            text: text.trim(),
            timestamp: serverTimestamp()
        })
    } catch (error) {
           console.error(error)
    }
}

async function sendPost(posts, user, post){
    try {
        await addDoc(collection(db, 'blog-posts', posts, 'post'), {
            uid: user.uid,
            displayName: user.displayName,
           
            text: post.trim(),
            timestamp: serverTimestamp()
        })
    } catch (error) {
        console.error(error)
    }
}

export {sendMessage, sendPost}