import React from 'react'
import Card from '@/components/common/Card'
import Tab, { ITabItem } from '@/components/common/Tab'
import SectionWrapper from '@/components/common/SectionWrapper'
import { SectionHeaderTitle, SectionTitle } from '@/components/common/SectionTitles'

const tabItems: ITabItem[] = [
    { id: 'js', title: 'JavaScript' },
    { id: 'c#', title: 'C++' }
]

const Clients = () => {
    return (
        <SectionWrapper id="clients">
            <article className="space-y-8 lg:space-y-space24 2xl:space-y-space32">
                <SectionTitle text="POPULAR CLIENTS" />
                <SectionHeaderTitle text='Awesome Clients' />
            </article>

            <section className="grid grid-cols-12 gap-space24 h-full">
                <div className="col-span-4">
                    <div className="sticky top-10 w-full">
                        <Tab tabItems={tabItems} />
                    </div>
                </div>
                <div className="col-span-8">
                    <div className="grid grid-cols-3 gap-space20">
                        {Array(20).fill(0).map((item, i) => (
                            <Card key={i} className='h-[20rem]'>this is client</Card>
                        ))}
                    </div>
                </div>
            </section>
        </SectionWrapper>
    )
}

export default Clients