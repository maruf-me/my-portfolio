import React from 'react'
import SectionWrapper from './common/SectionWrapper'
import { SectionHeaderTitle, SectionTitle } from './common/SectionTitles'

const Resume = () => {
    return (
        <SectionWrapper id='resume'>
            <article className="space-y-8 lg:space-y-space24 2xl:space-y-space32">
                <SectionTitle text="2+ YEARS OF EXPERIENCE" />
                <SectionHeaderTitle text='My Resume' />
            </article>
        </SectionWrapper>
    )
}

export default Resume