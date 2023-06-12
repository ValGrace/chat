import React, {useRef, useState} from 'react'
import styled from 'styled-components'
import { useAuth } from '../Context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
export const InputForm = styled.div `
    margin: 0 8px;
    padding-bottom: 0.7em; 
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    gap: 0.4em;

`
const HeadContent = styled.div `
        width: 100vw;
        height: 260px;
        background-color: #0D1452;
        margin: 0;
    `
export const Email = styled.input `
    padding: 0.5rem;
    width: 85vw;
`
export const Pass = styled.input `
    padding: 0.5rem;
    width: 85vw;
`
export const Button = styled.button `
    width: 90vw;
    background-color: #0F6CBF;
    border: none;
    color: white;
    padding: 0.5em;
    border-radius: 4px;
`
export const Form = styled.form `
    padding: 0.2rem;
    display: grid;
    grid-template-rows: 1;
    gap: 0.9em;
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
const LoginPage = () => {
    const emailRef = useRef()
    const passRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const navigate = useNavigate()
    async function handleSubmit(e){
        e.preventDefault()
        try {
            setError('')
            await login(emailRef.current.value, passRef.current.value)
            navigate('/dash')
        }
        catch {
            console.log(error)
            setError('Credentials do not match. Log in failed!')
        }
    }
     return (
        <>
        <HeadContent />
        <InputForm>
        <h2>Welcome back</h2>
        {error && <p>{error}</p>}
        <Form onSubmit={handleSubmit}>
        <Email type='email' placeholder='Enter your email' required ref={emailRef}/>
        <Pass type='password' placeholder='password' required ref={passRef}/>
        <Link to='/changePass'><h4>Forgot password</h4></Link>
        <Button type="submit">Sign In</Button>
        </Form>
        <svg height="20" width="auto">
  <Line x1="0" y1="0" x2="120" y2="0"  />
 <text x="130" y="0" fill="black">OR</text>
 <Line x1="150" y1="0" x2="280" y2="0"  />
</svg>
         <GoogleButton>Login with google account</GoogleButton>   
        <p>Dont have an account? <Link to='/'>Sign Up</Link></p>
        </InputForm>
        </>
    )
}

export default LoginPage