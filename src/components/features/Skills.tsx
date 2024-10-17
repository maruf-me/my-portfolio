import Icon from '@/components/common/Icon'
import { SectionHeaderTitle, SectionTitle } from '@/components/common/SectionTitles'
import SectionWrapper from '@/components/common/SectionWrapper'
import Card from '@/components/ui/Card'
import { featureList } from '@/data'
import { InfiniteSlider } from '../animations/InfiniteSlider'

const Skills = () => {
    return (
        <SectionWrapper id="skills">
            <SectionTitle text="Skills" className='sticky top-0 z-20 bg-primary-100/90 py-space8' />
            <SectionHeaderTitle text='What I Do' className='leading-10 sm:leading-relaxed' />

            <InfiniteSlider durationOnHover={800} duration={100} gap={24} className='py-space56'>
                {featureList.map((item) =>
                    <Card key={`featureCard` + item.id} className='max-w-[32rem] sm:max-w-[42rem] w-full'>
                        <div className='h-[24rem] px-space24 py-space16 text-100 flex flex-col justify-center items-between gap-space16 hover:-translate-y-4 duration-300'>
                            <Icon icon={item.icon} className='text-4xl text-secondary-100' />

                            <p className="text-xl font-semibold">{item.title}</p>
                            <p className='text-md'>{item.description}</p>
                        </div>
                    </Card>
                )}
            </InfiniteSlider>
        </SectionWrapper>
    )
}

export default Skills