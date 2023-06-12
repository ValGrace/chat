import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import { Form, Pass, Button, InputForm} from './Login'
const ChangePass = () => {
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    return (
        <InputForm>
        <h2>Confirm Password</h2>
        <Form>
        
        <Pass type="password"  ref={passwordRef} placeholder="1234"/>
        
        <Pass type="password" id="confirm" ref={confirmPasswordRef} placeholder="1234"/>
        <Button>Continue</Button>
        </Form>
        <h5>Already Have An Account.<Link to="/login" style={{color: "#ff782d"}}>Sign In</Link></h5>
        </InputForm>
    )
}

export default ChangePass