import { SectionHeaderTitle, SectionTitle } from '@/components/common/SectionTitles'
import SectionWrapper from '@/components/common/SectionWrapper'

const Contact = () => {
  return (
    <SectionWrapper id='contact'>
      <SectionTitle text="Visit my portfolio and keep your feedback" className='sticky top-0 z-20 bg-primary-100/90 py-space8' />
      <SectionHeaderTitle text='Contact with me' className='leading-10 sm:leading-relaxed' />
    </SectionWrapper>
  )
}

export default Contact
