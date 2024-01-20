import React from 'react'
import { projectList } from '@/data'
import Card from '@/components/common/Card'
import Icon from '@/components/common/Icon'
import Image from '@/components/common/Image'
import Button from '@/components/common/Button'
import SectionWrapper from '@/components/common/SectionWrapper'
import { SectionHeaderTitle, SectionTitle } from '@/components/common/SectionTitles'

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
            <div className='h-[46rem] p-space24 text-100'>

              <div className="w-full h-[26rem] rounded-2xl bg-red-400 overflow-hidden relative">
                <div className="absolute top-space4 right-space4 z-20">
                  <Button className='!p-space4 shadow-none'><Icon icon="mdi:view-arrow-right-outline" /></Button>
                </div>
                <Image src={item.image} alt={item.title} width={180} height={260} className='object-cover h-full w-full group-hover:scale-110 duration-500' />
              </div>

              <div className="flex justify-between items-center gap-space12 py-space12">
                <SectionTitle text={item.title} className='!text-sm' />

                <button className="flex items-center gap-space4 p-space4 px-space8 rounded-lg hover:text-secondary-100 hover:bg-black duration-700 text-100">
                  <Icon icon='icon-park-outline:love-and-help' />

                  <span className="text-100">112</span>
                </button>
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