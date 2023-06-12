import React, { useState} from 'react'
import { PostsItem } from '../model/posts'

type Props = {
    savePost: ( e: React.FormEvent, formData: PostsItem | any) => void 
}

const NewPost: React.FC<Props> = ({ savePost}) => {
    const [formData, setFormData] = useState<PostsItem | {}>()

    const handleForm = ( e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }
    return (
        <form className='Form' onSubmit={(e) => savePost(e, formData)}>
            <div>
                <div>
                    <label htmlFor='name'>Post Title</label>
                    <input onChange={handleForm} type="text" id='name' />
                </div>
                <div>
                    <label htmlFor='caption'>Caption</label>
                    <input onChange={handleForm} type='text' id='description' />
                </div>
            </div>
            <button disabled={formData === undefined ? true : false}>Create Post</button>
        </form>
    )
}

export default NewPost