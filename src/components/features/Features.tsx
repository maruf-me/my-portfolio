import React from 'react'
import { featureList } from '@/data'
import Card from '@/components/common/Card'
import Icon from '@/components/common/Icon'
import SectionWrapper from '@/components/common/SectionWrapper'
import { SectionHeaderTitle, SectionTitle } from '@/components/common/SectionTitles'

const Features = () => {
    return (
        <SectionWrapper id="features">
            <article className="space-y-8 lg:space-y-space24 2xl:space-y-space32">
                <SectionTitle text="Features" />
                <SectionHeaderTitle text='What I Do' />
            </article>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-space32">
                {featureList.map((item) =>
                    <Card key={`featureCard` + item.id}>
                        <div className='h-[33rem] px-[4rem] py-[4rem] text-100 flex flex-col justify-center items-between gap-space16 hover:-translate-y-4 duration-300'>
                            <Icon icon={item.icon} className='text-4xl text-secondary-100' />

                            <p className="text-xl font-semibold">{item.title}</p>
                            <p className='text-md'>{item.description}</p>
                        </div>
                    </Card>
                )}
            </div>
        </SectionWrapper>
    )
}

export default Features