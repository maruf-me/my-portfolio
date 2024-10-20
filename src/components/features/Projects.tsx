import Icon from '@/components/common/Icon'
import Image from '@/components/common/Image'
import { SectionHeaderTitle, SectionTitle } from '@/components/common/SectionTitles'
import SectionWrapper from '@/components/common/SectionWrapper'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { projectList } from '@/data'
import Link from 'next/link'

const Projects = () => {
  return (
    <SectionWrapper id='projects' >
      <SectionTitle text="Visit my portfolio and keep your feedback" className='sticky top-0 z-30 bg-primary-100/90 py-space8' />
      <SectionHeaderTitle text='My Projects' className='leading-10 sm:leading-relaxed' />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-space32 py-space24">
        {projectList.map((item) =>
          <Card key={`featureCard` + item.id}>
            <div className='p-space24 text-100'>

              <div className="w-full h-[26rem] rounded-2xl bg-red-400 overflow-hidden relative">
                <div className="absolute top-space4 right-space4 z-20">
                  <Link href={item.link} target='_blank'>
                    <Button className='!p-space4 shadow-none'><Icon icon="mdi:view-arrow-right-outline" /></Button>
                  </Link>
                </div>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='object-cover h-full w-full group-hover:scale-105 duration-500'
                />
              </div>

              <div className="flex justify-between items-center gap-space12 py-space12">
                <SectionTitle text={item.title} className='!text-sm' />

                {/* <button className="flex items-center gap-space4 p-space4 px-space8 rounded-lg hover:text-secondary-100 hover:bg-black duration-700 text-100">
                  <Icon icon='icon-park-outline:love-and-help' />

                  <span className="text-100">112</span>
                </button> */}
              </div>

              <p className='text-md leading-10'>{item.description}</p>

              <p className='text-md font-semibold underline underline-offset-4 py-space12'>
                Technologies:
              </p>
              <article className='flex items-center flex-wrap gap-space8'>
                {item.technologies.map((tech) => (
                  <span key={tech} className='text-sm py-[.2rem] px-space8 rounded-md bg-zinc-900/10 border border-slate-700'>{tech}</span>
                ))}
              </article>
            </div>
          </Card>
        )}
      </div>
    </SectionWrapper>
  )
}

export default Projects