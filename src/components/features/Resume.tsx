import React from 'react'
import SectionWrapper from '@/components/common/SectionWrapper'
import { SectionHeaderTitle, SectionTitle } from '@/components/common/SectionTitles'

const Resume = () => {
    return (
        <SectionWrapper id='resume'>
            <article className="space-y-8 lg:space-y-space24 2xl:space-y-space32">
                <SectionTitle text="7+ YEARS OF EXPERIENCE" />
                <SectionHeaderTitle text='My Resume' />
            </article>
        </SectionWrapper>
    )
}

export default Resume