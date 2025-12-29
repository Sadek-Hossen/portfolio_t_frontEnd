
import CountDountPage from '@/app/CountDount/page'
import ExperiencPage from '@/app/experiencs/page'
import Heropage from '@/app/hero/page'
import ProjectsPage from '@/app/Projects/page'
import ReviewPage from '@/app/review/page'
import TimelinePage from '@/app/Timeline/page'
import Tech from '@/components/tech'
import React from 'react'

function Index() {
  return (
    <div className='md:px-8 text-white px-4'>
        <Heropage />
        <CountDountPage />
        <ExperiencPage />
        <TimelinePage />
        <ProjectsPage />
        <Tech />
        <ReviewPage />
    
    </div>
  )
}

export default Index