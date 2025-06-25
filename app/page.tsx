import { Button } from '@/components/ui/button'
import CompaninoCard from '@/components/CompaninoCard'
import React from 'react'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.actions'

const Page = async () => {
  const companions = await getAllCompanions({limit: 3})
  const recentSessionsCompanions = await getRecentSessions(10)

  console.log(companions)
  console.log(recentSessionsCompanions)

  return (
    <main>
      <h1 className='text-2x underline'>Popular Companions</h1>
      <section className="home-section">
        { companions.map((companion) => (
          <CompaninoCard 
            key={companion.id}
            id={companion.id}
            subject={companion.subject}
            name={companion.name}
            topic={companion.topic}
            duration={companion.duration}
          />
        ))}
      </section>    
      <section className='home-section'>
        <CompanionList 
          title= "Recent Sessions"
          companions= {recentSessionsCompanions}
          className= "w-2/3 max-lg:w-full"
        />
        <CTA />
        {/* <Button variant='default'>Let's get started</Button> */}
      </section>
    </main>
    
  )
}

export default Page 