import React from 'react'
import { postsProps} from '../model/posts'
type Props = postsProps
const Post : React.FC <Props> = ({ post}) => {
    return (
        <div className="card-container">
            <div className='image-part'>
                <img src={post.url} alt={post.postTitle} />
            </div>
            <div className="captions">
                <h4>{post.postTitle}</h4>
               <p>{post.caption}</p>
               <h6>{post.createdAt && <>{post.createdAt}</>}</h6>
            </div>
        </div>
    )
}

export default Post