'use client'
import React, {useContext, useEffect, useState} from 'react'
import { FormContext } from '../Context/FormContext'
import { redirect, useRouter } from 'next/navigation';

function additionalDetails() {
   const {roles, isTermsAccepted, setIsTermsAccepted} = useContext(FormContext);
   const [selectedRole, setSelectedRole] = useState('')
    const [isdisabled, setIsDisabled] = useState(true);
    const route = useRouter();
   useEffect(()=>{
        if(selectedRole && isTermsAccepted) {
            setIsDisabled(false);
        }else {
            setIsDisabled(true)
        }
   },[])

   const handleAcceptTerms = () => {
    setIsTermsAccepted(!isTermsAccepted)
   }

   const handleSelectRole= (e) => {
    setSelectedRole(e.target.value)
   }

   const handleBack = () => {
     route.back();
   }

   const handleSubmit = () => {
    redirect('/');
   }

  return (
    <form>
        <select onClick={handleSelectRole} required>
            {roles?.map((role, index) => (
                <option value={role} key={index}>{role}</option>
            ))}
        </select>

        
        <input type='checkbox' value={isTermsAccepted} onChange={handleAcceptTerms}/>
        <label>Accept Terms & Conditions</label>

        <button onClick={() =>handleBack()}>Back</button>
        <button onClick={() => handleSubmit()} disabled={isdisabled}>Submit</button>
    </form>
  )
}

export default additionalDetails