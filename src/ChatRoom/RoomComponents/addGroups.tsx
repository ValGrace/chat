import React, { useState} from 'react'
import { RoomsItem } from '../model/rooms'

type Props = {
    addGroup: (e: React.FormEvent, formData: RoomsItem | any) => void
}

 const NewGroup: React.FC<Props> = ({ addGroup}) => {
    const [formData, setFormData] = useState<RoomsItem | {}>()
    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }
    return (
        <form className="Form" onSubmit={(e) => addGroup(e, formData)}>
            <div>
                <div>
                    <label htmlFor='groupName'>Group Name</label>
                    <input onChange={handleForm} type='text' id='groupName' />
                </div>
                <div>
                    <label htmlFor='groupDescription'>Group Description</label>
                    <input onChange={handleForm} type='text' id='groupDescription' />
                </div>
            </div>

        </form>
    ) 
 } 

 export default NewGroup