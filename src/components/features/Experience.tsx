import { SectionHeaderTitle, SectionTitle } from '@/components/common/SectionTitles'
import SectionWrapper from '@/components/common/SectionWrapper'
import { experiences } from '@/data'

const Experience = () => {
  return (
    <SectionWrapper id='experience'>
      <SectionTitle text="3+ YEARS OF EXPERIENCE" className='sticky top-0 z-20 bg-primary-100/90 py-space8' />
      <SectionHeaderTitle text='Experience' className='leading-10 sm:leading-relaxed' />


      <div className='w-full sm:w-10/12 sm:mx-auto space-y-space32 py-space24'>
        {experiences.map((experience) => (
          <div key={experience.id} className='mb-space8'>
            <article className="flex justify-between gap-space16">
              <h3 className='text-md sm:text-xl font-semibold text-gray-300 leading-10'>{experience.company}</h3>

              <p className='text-xs sm:text-sm text-gray-300 italic leading-10'>{experience.duration}</p>
            </article>

            <div className="flex flex-wrap gap-space8 my-space12">
              {experience.technologies.map((technologies, index) => (
                <p key={index} className='text-sky-600 font-semibold px-space6 flex gap-space8 leading-6 text-xs sm:text-sm'>
                  <span>{technologies}</span>
                  <span>{experience.technologies.length !== index + 1 && '|'}</span>
                </p>
              ))}
            </div>

            <article className="flex flex-col gap-space4 sm:gap-space8 pl-space12 sm:pl-space24">
              {experience.responsibilities.map((responsibility, index) => (
                <li key={index} className='list-disc list-inside text-gray-400 text-xs sm:text-sm '>{responsibility}</li>
              ))}
            </article>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Experience