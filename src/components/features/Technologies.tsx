import { SectionHeaderTitle, SectionTitle } from '@/components/common/SectionTitles'
import SectionWrapper from '@/components/common/SectionWrapper'
import { technologies } from '@/data'
import Card from '../ui/Card'

const Technologies = () => {

  const textColor = (tech: string) => {
    switch (tech) {
      case "Programming Languages":
        return 'text-orange-600';

      case "FrameWorks & Libraries":
        return 'text-purple-600';

      case "Tools":
        return 'text-teal-600';

      case "Deployment":
        return 'text-green-600';

      case "Others":
        return 'text-sky-600';

      default:
        return 'text-green-600';
    }

  }

  return (
    <SectionWrapper id='resume'>
      <SectionTitle text="SPECIALIZED IN FRONTEND" className='sticky top-0 z-20 bg-primary-100/90 py-space8' />
      <SectionHeaderTitle text='Technologies' className='leading-10 sm:leading-relaxed' />

      <div className="grid sm:grid-cols-2 gap-space24 md:w-10/12 mx-auto mt-space40">
        {technologies.map((item) => {

          return (
            <Card key={item.title} className='p-space16 z-10'>
              <div className={`flex flex-col gap-space8 ${textColor(item.title)}`}>
                <p className='text-lg md:text-xl font-semibold leading-8 md:leading-10'>{item.title}</p>
                <div className='flex gap-space8 sm:gap-0 flex-wrap sm:flex-col'>
                  {item.items.map((tech) => (
                    <p key={tech} className='text-md leading-normal'>{tech}</p>
                  ))}
                </div>
              </div>
            </Card>
          )
        })}
      </div>

    </SectionWrapper>
  )
}

export default Technologies