'use client'

import React, { useEffect, useState, useContext } from 'react'
import { FormContext } from '../Context/FormContext'
import { redirect } from 'next/navigation';

function BasicInformation() {
const {fullName, email, setFullName, setEmail} = useContext(FormContext);

const [isdisabled, setIsDisabled] = useState(true)

useEffect(()=>{
    if(fullName && email) {
        setIsDisabled(false)
    } else {
        setIsDisabled(true)
    }
},[fullName, email])


const handleFullName = (e) => {
    setFullName(e.target.value);
}

const handleEmail = (e) => {
    setEmail(e.target.value)
}

const handleNext = () => {
    redirect('/additionalDetails')
}
  return (
    <div>
        <form>
            <label>Fullname</label>
            <input type="text" value={fullName} onChange={handleFullName} required/>

            <label>Email</label>
            <input type="email" value={email} onChange={handleEmail} required/>

            <button disabled={isdisabled} onClick={()=>handleNext()}>Next</button>
        </form>
    </div>
  )
}

export default BasicInformation