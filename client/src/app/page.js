'use client'
import React from 'react'
import dynamic from 'next/dynamic'
// import Scene from '@/components/Scene'

const Scene = dynamic(()=>import('@/components/Scene'),{
  loading:() =><p>Loading.....</p>,
  ssr: false,
})

const Home = () => {
  return (
    <main className='h-screen w-screen mx-auto'>
      <Scene />
    </main>
  )
}

export default Home
