import { Button } from '@/components/ui/button'
import CompaninoCard from '@/components/CompaninoCard'
import React from 'react'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1 className='text-2x underline'>Popular Companions</h1>
      <section className="home-section">
        <CompaninoCard 
          id="123"
          subject= "science"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          duration={45}
          color="#E5D0FF"
        />
        <CompaninoCard 
            id= "2"
            subject= "maths"
            name= "Countsy the Number Wizard"
            topic= "Derivatives & Integrals"
            duration= {30}
            color= "#FFDA6E"
        />
        <CompaninoCard 
          id= "3"
          subject= "language"
          name= "Verba the Vocabulary Builder"
          topic= "English Literature"
          duration= {30}
          color= "#BDE7FF"
        />
      </section>    
      <section className='home-section'>
        <CompanionList 
          title= "Recent Sessions"
          companions= {recentSessions}
          className= "w-2/3 max-lg:w-full"
        />
        <CTA />
        {/* <Button variant='default'>Let's get started</Button> */}
      </section>
    </main>
    
  )
}

export default Page 