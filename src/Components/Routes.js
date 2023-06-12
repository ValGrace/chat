import React from 'react'

import { Routes, Route} from 'react-router-dom'
import SignupPage from '../AccountAuth/Signup'
import LoginPage from '../AccountAuth/Login'
import AuthProvider from '../Context/AuthContext'
import ChangePass from '../AccountAuth/changePass'
import Dashboard from './Dashboard'
import ProfilePage from './Profile'
import Messages from '../Chatapp/Messages'
const EntryPage = () => {
    return (
        <>
        <AuthProvider>
            <Routes>
                <Route path="/dash" element={<Dashboard/>}/>
                <Route path="/login" element={<LoginPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route exact path="/" element={<SignupPage />} />
                <Route path="/changePass" element={<ChangePass />} />
                <Route path="/rooms/:id" element={<Messages />} /> 
            </Routes>
        </AuthProvider>
        </>
    )
}

export default EntryPage