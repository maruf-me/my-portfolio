import React from 'react'
import Card from './common/Card'
import { featureList } from '@/data'
import { SectionHeaderTitle, SectionTitle } from './common/SectionTitles'

const Features = () => {
    return (
        <section id="features" className='px-space20'>
            <div className="min-h-screen border-b border-black py-[6rem] space-y-space32 lg:space-y-[4rem]">
                <article className="space-y-8 lg:space-y-space24 2xl:space-y-space32">
                    <SectionTitle text="Features" />
                    <SectionHeaderTitle text='What I Do' />
                </article>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-space32">
                    {featureList.map((item) =>
                        <Card key={`featureCard` + item.id} className='px-[4rem] py-[4rem]'>
                            this is a first card
                        </Card>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Features