'use client'
import React, {createContext, useState} from 'react'

export const FormContext = createContext(null);

export const FormContextProvider = ({children}) =>{
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const roles = ['Developer', 'Designer', 'Manager']
    const [isTermsAccepted, setIsTermsAccepted] = useState(false);

    const contextValue = {
        fullName,
        setFullName,
        email,
        setEmail,
        roles,
        isTermsAccepted,
        setIsTermsAccepted
    }
    return <FormContext.Provider value={contextValue}>
        {children}
    </FormContext.Provider>
}