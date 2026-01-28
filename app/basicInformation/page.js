'use client'

import React, { useEffect, useState, useContext } from 'react'
import { FormContext } from '../Context/FormContext'
import { useRouter } from 'next/navigation';

function BasicInformation() {
const {fullName, email, setFullName, setEmail} = useContext(FormContext);

const [isdisabled, setIsDisabled] = useState(true);
const route = useRouter()

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
    route.push('/additionalDetails')
}
  return (
    <div className='flex min-h-screen justify-center'>
        <form className='flex flex-col items-start p-10 grow'>
            <label className='p-2'>Fullname
            <input className='mx-2 border-1 border-white rounded-sm' type="text" value={fullName} onChange={handleFullName} required/>
            </label>

            <label className='p-2'>Email
            <input className='mx-2 border-1 border-white rounded-sm' type="email" value={email} onChange={handleEmail} required/>
            </label>

            <button className='mx-2 border-1 border-white rounded-sm px-4 py-2 cursor-pointer' type={"button"} disabled={isdisabled} onClick={handleNext}>Next</button>
        </form>
    </div>
  )
}

export default BasicInformation