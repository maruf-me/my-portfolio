import { SectionHeaderTitle, SectionTitle } from '@/components/common/SectionTitles'
import SectionWrapper from '@/components/common/SectionWrapper'
import { technologies } from '@/data'
import { Flag } from 'lucide-react'
import { BorderTrail } from '../animations/BorderTrail'
import Icon from '../common/Icon'
import Card from '../ui/Card'

const Technologies = () => {

  const textColor = (tech: string) => {
    switch (tech) {
      case "Programming Languages":
        return 'bg-sky-800/10';

      case "FrameWorks & Libraries":
        return 'bg-green-800/10';

      case "Tools":
        return 'bg-green-800/10';

      case "Deployment":
        return 'bg-sky-800/10';

      case "Others":
        return 'bg-teal-700/10';

      default:
        return 'bg-yellow-700/10';
    }

  }

  return (
    <SectionWrapper id='technologies'>
      <SectionTitle text="SPECIALIZED IN FRONTEND" className='sticky top-0 z-20 bg-primary-100/90 py-space8' />
      <SectionHeaderTitle text='Technologies' className='leading-10 sm:leading-relaxed' />

      <div className="grid sm:grid-cols-2 gap-space24 md:w-10/12 mx-auto mt-space40 mb-space24 items-start">
        {technologies.map((item) => {

          return (
            <div key={item.title} className='relative z-10 rounded-xl max-h-max' >
              <Card className={`${textColor(item.title)} rounded-xl text-slate-400`} >
                <div className={`flex flex-col gap-space12 p-space24 ${textColor(item.title)}`}>
                  <p className={`text-md sm:text-lg md:text-xl font-semibold leading-8 md:leading-10 flex items-center gap-space4 border-b border-gray-700 pb-space8`}> <Flag />{item.title}</p>

                  <div className='flex gap-space12 sm:gap-space12 flex-wrap sm:flex-col'>
                    {item.items.map((tech) => (
                      <div key={tech.title} className="flex items-center gap-space8">
                        <Icon
                          icon={tech.icon}
                          className='text-md sm:text-lg'
                        />

                        <p className='text-sm sm:text-md leading-normal'>{tech.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
              <BorderTrail
                style={{
                  boxShadow:
                    '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
                }}
                size={15}
              />
            </div>
          )
        })}
      </div>

    </SectionWrapper>
  )
}

export default Technologies