import React, {useState, useRef} from 'react'
import { BsFillCameraFill} from 'react-icons/bs'
import styled from 'styled-components'
import { InputForm, Button, Email, Pass } from './Login'
import {useAuth} from '../Context/AuthContext'
import { Link, useNavigate} from 'react-router-dom'
import './account.css'

export const Form = styled.form `
padding: 0.2rem;
display: grid;
gap: 8px;
`
const SignupPage = () => {
    const emailRef = useRef() 
    const displayName = useRef()
    const photoUrl = useRef()
    const passwordRef = useRef()
    const confirmRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')
    const { signup} = useAuth()
    const navigate = useNavigate()
   
      const HeadContent = styled.div `
        width: 100vw;
        height: 260px;
        background-color: #0D1452;
        margin: 0;
    `
    
    const Line = styled.line `
    stroke:#000;
    stroke-width:2;
    opacity: 0.7;
    `
    const GoogleButton = styled.button `
        width: 85vw;
        color: white;
        background-color: black;
        opacity: 0.4;
        border-radius: 4px;
        border: none;
        padding: 0.8em;
        margin: auto;
    `
    
    async function handleSubmit(e){
        e.preventDefault()
        if (passwordRef.current.value !== confirmRef.current.value){
            return setError('Passwords do not match!')
        }
        try {
            setError('')
            setLoading(true)
            await signup( emailRef.current.value, passwordRef.current.value)
            navigate('/dash')
        }
        catch {
           setError('Failed to create an account!') 
        }
        setLoading(false)
    }

    const onSelectImage = (event) => {
        let reader = new FileReader()
         reader.onload = function () {
            photoUrl.current.src = reader.result
         }
         if (event.target.files[0]){
            reader.readAsDataURL(event.target.files[0]);
         }
    }
    return (
        <>
        <HeadContent />
        
        <InputForm>
        <h2>Signup</h2>
        <div className='ImageContainer'>
         <img src='' className='Image' alt='uploadedProfile' ref={photoUrl}/>
            <label htmlFor='inputFile'>
            <BsFillCameraFill color='black' size='2em' opacity='1.0'/>
            <input type='file' onChange={onSelectImage} id='inputFile' accept='image/*'/>
            </label>

                </div>
             
            {error && <p>{error}</p>}
            <Form onSubmit={handleSubmit}>
            <Email type='name' placeholder ='Jane Doe' ref={displayName}/>    
            <Email type="email" placeholder="1804215@kcau.ac.ke" required ref={emailRef} />
            <Pass type="password" placeholder='password'required ref={passwordRef}/>
            <Pass type="password" placeholder='password' required ref={confirmRef}/>
                   
            <Button disabled={loading} type='submit'> Sign Up</Button>
            
            </Form>
            
        </InputForm>
        <svg height="20" width="600">
  <Line x1="0" y1="0" x2="120" y2="0"  />
 <text x="130" y="0" fill="black">OR</text>
 <Line x1="150" y1="0" x2="280" y2="0"  />
</svg>
<GoogleButton>Sign Up With Google</GoogleButton>
            <h4>Already have an account? <Link to="/login">Sign In</Link></h4>
        </>
    )
}

export default SignupPage