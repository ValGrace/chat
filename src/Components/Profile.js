import React, {useState ,useRef} from 'react'
import { InputForm, Button, Email, Pass } from '../AccountAuth/Login'
import { Form } from '../AccountAuth/Signup'
import { BsFillCameraFill } from 'react-icons/bs'
import { useAuth} from '../Context/AuthContext'
import { updateProfile, updatePassword, updateEmail} from 'firebase/auth'
import { storage} from '../APIIntegration/firebase'
import { ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
const ProfilePage = () => {
    const emailRef = useRef()
    const displayName = useRef()
    let photoUrl = useRef()
    const passwordRef = useRef()
    const confirmRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')
    const {currentUser} = useAuth()
    const storageRef = ref(storage)
    const [selectedImage, setSelectedImage] = useState()
   const profileRef = useRef()
  
    // let photourl = ''
    const metadata = {
        contentType : 'image/jpeg'
    };
    async function handleProfile(e){
            e.preventDefault()
            const imagesRef = ref(storageRef, 'images/' + selectedImage.name) 
                try {
                    setError('')
                   const uploadImage = uploadBytesResumable(imagesRef, selectedImage, metadata)
                   uploadImage.on('state_changed', (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    setError('Upload is ' + progress +'% done')
                   },
                  
                   () => {
                    getDownloadURL(uploadImage.snapshot.ref).then((downloadUrl) => {

                        currentUser.photoURL = downloadUrl
                        // setProfileImage(downloadUrl)
                        profileRef.current.src = downloadUrl
                        console.log('File available at', downloadUrl)   
                        
                    })
            },
              () => {
                updateProfile(currentUser, {
                   displayName: displayName.current.value,
                   photoURL: currentUser.photoURL
            })
        }
            )
                    
                    setLoading(true) 
                }
             catch (error) {
                setError('Failed to update profile') 
            }
            setLoading(false)
    }
          
      
        
            async function handleEmail (e) {
                e.preventDefault()
                try {
                    setError('')
                    updateEmail(currentUser, emailRef.current.value)
                    setLoading(true)  
                    
                }
                catch {
                    setError('Failed to create an account!') 
                }
                setLoading(false)
            } 
   
       
             
      
        async function handlePassword(e) {
            e.preventDefault()
            if (passwordRef.current.value !== confirmRef.current.value){
                return setError('Passwords do not match!')
            }
            try {
                setError('')
                updatePassword(currentUser, passwordRef.current.value)
                setLoading(true)
            }
           catch {
                setError('Failed to update passwords')
           }
        }
  
    const onSelectImage = (event) => {
        
        let reader = new FileReader()
         reader.onload = function () {
            photoUrl.current.src = reader.result
         }
         if (event.target.files[0]){
            reader.readAsDataURL(event.target.files[0]);
            
         }
         setSelectedImage(event.target.files[0])
        console.log(selectedImage)
    }

    return (
        <>
         <InputForm>
         <h2>Update Profile Details</h2>
         <h2>{currentUser.displayName}</h2>
         {currentUser.photoURL}
            {error && <p>{error}</p>}
            <img src="" alt="profile" ref={profileRef}/> 
            <Form onSubmit={handleProfile}>
            <div className='ImageContainer'>
         <img src="" className='Image' alt='profile_image' ref={photoUrl}/>
            <label htmlFor='inputFile'>
            <BsFillCameraFill color='black' size='2em' opacity='1.0'/>
            <input type='file' name='file' onChange={onSelectImage} id='inputFile' accept='image/*'/>
            </label>

                </div>
                
            <Email type='name' placeholder ='Jane Doe' ref={displayName}/>  
            <Button disabled={loading} type='submit'> Save</Button>
            </Form>
            <Form onSubmit={handleEmail}>
                <p>Update Email</p>  
            <Email type="email" placeholder="1804215@kcau.ac.ke" required ref={emailRef} />
            <Button disabled={loading} type='submit'> Save</Button>
            </Form>
            <Form onSubmit={handlePassword}>
                <p>Change Password</p>
            <Pass type="password" placeholder='password'required ref={passwordRef}/>
            <Pass type="password" placeholder='password' required ref={confirmRef}/>
                   
            <Button disabled={loading} type='submit'> Save</Button>
            
            </Form>
         </InputForm>
        </>
    )
} 

export default ProfilePage