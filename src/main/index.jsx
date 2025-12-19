
import CountDountPage from '@/app/CountDount/page'
import ExperiencPage from '@/app/experiencs/page'
import Heropage from '@/app/hero/page'
import ProjectsPage from '@/app/Projects/page'
import TimelinePage from '@/app/Timeline/page'
import ResponsiveNavbar from '@/layout/header'
import React from 'react'

function Index() {
  return (
    <div className='md:px-8 text-white px-4'>
        <ResponsiveNavbar />
        <Heropage />
        <CountDountPage />
        <ExperiencPage />
        <TimelinePage />
        <ProjectsPage />
    </div>
  )
}

export default Index