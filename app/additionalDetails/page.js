'use client'
import React, {useContext, useEffect, useState} from 'react'
import { FormContext } from '../Context/FormContext'
import { useRouter } from 'next/navigation';

function additionalDetails() {
   const {fullName, email, roles, isTermsAccepted, setIsTermsAccepted, selectedRole, setSelectedRole} = useContext(FormContext);
   const [isdisabled, setIsDisabled] = useState(true);
   const route = useRouter();
   const [displayDetails, setDisplayDetails] = useState(false);

   useEffect(()=>{
        if(selectedRole && isTermsAccepted) {
            setIsDisabled(false);
        }else {
            setIsDisabled(true)
        }
   },[selectedRole, isTermsAccepted])

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
    setDisplayDetails(true)
   }

  return (
    <div className='flex min-h-screen justify-center'>        
    {displayDetails ? 
        <div className='flex flex-col p-10'>
            {fullName && <span>Full Name: {fullName}</span>}
            {email && <span>Email: {email}</span>}
            {selectedRole && <span> Role: {selectedRole}</span>}
            {isTermsAccepted && <span>Terms Accepted (Yes / No) : {isTermsAccepted ? 'Yes' : 'No'}</span>}
        </div> :
        <form className='flex flex-col items-start p-10 grow'>
           <label className='p-2'> Select Role
            <select className='mx-2 border-1 border-white rounded-sm'  value={selectedRole} onChange={handleSelectRole} required>
                <option disabled>Select option</option>
                {roles?.map((role, index) => (
                    <option value={role} key={index}>{role}</option>
                ))}
            </select>
            </label>

            <label  className='p-2'>
            <input className='mx-2 border-1 border-white rounded-sm'  type='checkbox' checked={isTermsAccepted} onChange={handleAcceptTerms}/>
            Accept Terms & Conditions</label>
            <div className='flex flex-row'>
            <button className='mx-2 border-1 border-white rounded-sm px-4 py-2 cursor-pointer' type='button' onClick={() =>handleBack()}>Back</button>
            <button className='mx-2 border-1 border-white rounded-sm px-4 py-2 cursor-pointer' type='button' onClick={() => handleSubmit()} disabled={isdisabled}>Submit</button>
            </div>
            </form>
        }
    </div>


  )
}

export default additionalDetails