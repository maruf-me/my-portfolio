import { SectionHeaderTitle, SectionTitle } from '@/components/common/SectionTitles'
import SectionWrapper from '@/components/common/SectionWrapper'

const Experience = () => {
  return (
    <SectionWrapper id='experience'>
      <SectionTitle text="3+ YEARS OF EXPERIENCE" className='sticky top-0 z-20 bg-primary-100/90 py-space8' />
      <SectionHeaderTitle text='Experience' className='leading-10 sm:leading-relaxed' />
    </SectionWrapper>
  )
}

export default Experience