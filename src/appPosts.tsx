import React, { useEffect, useState} from 'react'
import NewPost from './ChatRoom/RoomComponents/addNewPost'
import PostItem from './ChatRoom/RoomComponents/addPost'
import { getPosts, addPost } from './ChatRoom/backend/fetchData'
import { PostsItem } from './ChatRoom/model/posts'

const Feed: React.FC = () => {
    const [posts, setPosts] = useState<PostsItem[]>([])

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = (): void => {
        getPosts()
        .then(({ data: { posts} }: PostsItem[] | any ) => setPosts(posts))
        .catch((err: Error) => console.log(err))
    }

    const handleSavePost = ( e: React.FormEvent, formData: PostsItem): void => {
        e.preventDefault()
        addPost(formData)
        .then(({ status, data }) => {
            if (status !== 201) {
                throw new Error('Error! Post not saved')
            }
            setPosts(data.posts)
        
        })
        .catch((err) => console.log(err))
    }

    return (
        <main className='appPosts'>
            <h2>-------------</h2>
            <NewPost savePost={handleSavePost} />
            {posts.map((post: PostsItem) => (
                <PostItem key={post.id} post={post} />
            ))}
        </main>
    )
}

export default Feed