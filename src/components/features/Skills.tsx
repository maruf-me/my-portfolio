import Icon from '@/components/common/Icon'
import { SectionHeaderTitle, SectionTitle } from '@/components/common/SectionTitles'
import SectionWrapper from '@/components/common/SectionWrapper'
import Card from '@/components/ui/Card'
import { featureList, skillIcons } from '@/data'
import { InfiniteSlider } from '../animations/InfiniteSlider'



const Skills = () => {

    return (
        <SectionWrapper id="skills">
            <SectionTitle text="Skills" className='sticky top-0 z-20 bg-primary-100/90 py-space8' />
            <SectionHeaderTitle text='What I Do' className='leading-10 sm:leading-relaxed' />

            <InfiniteSlider durationOnHover={700} duration={50} gap={24} className='py-space32'>
                {skillIcons.map((item) => (
                    <div key={item} className="mx-1 sm:mx-3" title={item.split(':')[1]}>
                        <Icon icon={item} className='text-xl sm:text-7xl text-secondary-100' />
                    </div>
                ))}
            </InfiniteSlider>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-space8'>
                {featureList.map((item) =>
                    <Card key={`featureCard` + item.id} className={`z-10 w-full`}>
                        <div className='sm:h-[18rem] px-space24 py-space16 text-100 flex flex-col justify-center items-between gap-space8 sm:gap-space16 hover:-translate-y-4 duration-300'>
                            <div className="flex items-center gap-3">
                                <Icon icon={item.icon} className='text-2xl sm:text-4xl text-secondary-100' />

                                <p className="text-md sm:text-lg font-semibold leading-10">{item.title}</p>
                            </div>

                            <p className='text-xs sm:text-md'>{item.description}</p>
                        </div>
                    </Card>
                )}
            </div>
        </SectionWrapper>
    )
}

export default Skills