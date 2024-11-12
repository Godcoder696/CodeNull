'use client'
import NavBar from '@/app/components/projects/NavBar'
import React from 'react'

function Page({params}) {
  return (
    <>
      <NavBar project={params.projectId}/>
    </>
  )
}

export default Page
