import React from 'react'
import SectionWrapper from './common/SectionWrapper'
import { SectionHeaderTitle, SectionTitle } from './common/SectionTitles'
import Card from './common/Card'
import Icon from './common/Icon'
import { projectList } from '@/data'
import Image from './common/Image'
import Button from './common/Button'

const Portfolio = () => {
  return (
    <SectionWrapper id='portfolio'>
      <article className="space-y-8 lg:space-y-space24 2xl:space-y-space32">
        <SectionTitle text="Visit my portfolio and keep your feedback" />
        <SectionHeaderTitle text='My Portfolio' />
      </article>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-space32">
        {projectList.map((item) =>
          <Card key={`featureCard` + item.id}>
            <div className='h-[40rem] p-space24 text-100'>

              <div className="w-full h-[18rem] rounded-2xl bg-red-400 overflow-hidden relative">
                <div className="absolute top-space4 right-space4 z-20">
                  <Button className='!p-space4 shadow-none'><Icon icon="mdi:view-arrow-right-outline" /></Button>
                </div>
                <Image src={item.image} alt={item.title} width={180} height={180} className='object-cover h-full w-full group-hover:scale-110 duration-500' />
              </div>

              <div className="flex justify-between items-center gap-space12">
                <SectionTitle text={item.title} className='!text-sm' />

<div className="flex p-space4 px-space8 rounded-lg bg-black">ddd</div>
              </div>

              <p className='text-md'>{item.description}</p>
            </div>
          </Card>
        )}
      </div>
    </SectionWrapper>
  )
}

export default Portfolio