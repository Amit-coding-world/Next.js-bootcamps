"use client"
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'

const page = () => {
    const params=useParams()

    // const router=useRouter()

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         router.push('/dashboard')
    //     },2000);
    // })
  return (
    <div>
    <div>{params.slug}</div>
    {/* <button type='button' onClick={()=>router.push('/dashboard')}>Dashboard</button> */}
    </div>
  )
}

export default page