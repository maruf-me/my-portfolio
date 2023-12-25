import React from 'react'
import Card from './common/Card'
import { SectionHeaderTitle, SectionTitle } from './common/SectionTitles'

const featureList = [
    { id: 1, icon: '', title: 'Web Development', description: 'Translating any designs and wireframes into pixel-perfect high-quality code.' },
    { id: 2, icon: '', title: 'High-Quality clean Code', description: 'Writing clean, high-quality, high-performance, maintainable code.' },
    { id: 3, icon: '', title: 'Front-End Developer', description: 'Building reusable components and front-end libraries for future use.' },
]

const Features = () => {
    return (
        <section id="features" className='px-space20'>
            <div className="min-h-screen border-b border-black py-[6rem] space-y-space32 lg:space-y-[4rem]">
                <article className="space-y-8 lg:space-y-space24 2xl:space-y-space32">
                    <SectionTitle text="Features" />
                    <SectionHeaderTitle text='What I Do' />
                </article>

                <div className="grid grid-cols-3 gap-space32">
                    {featureList.map((item) =>
                        <Card key={item.id + `featureCard`} className='px-[4rem] py-[4rem]'>
                            this is a first card
                        </Card>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Features