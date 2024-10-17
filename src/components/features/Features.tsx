import Icon from '@/components/common/Icon'
import { SectionHeaderTitle, SectionTitle } from '@/components/common/SectionTitles'
import SectionWrapper from '@/components/common/SectionWrapper'
import Card from '@/components/ui/Card'
import { featureList } from '@/data'
import { InfiniteSlider } from '../animations/InfiniteSlider'

const Features = () => {
    return (
        <SectionWrapper id="features">
            <article className="space-y-8 lg:space-y-space24 2xl:space-y-space32">
                <SectionTitle text="Features" />
                <SectionHeaderTitle text='What I Do' />
            </article>

            <InfiniteSlider durationOnHover={800} duration={50} gap={24} className='py-space56'>
                {featureList.map((item) =>
                    <Card key={`featureCard` + item.id} className='max-w-[32rem] sm:max-w-[42rem]'>
                        <div className='h-[28rem] px-[4rem] py-[4rem] text-100 flex flex-col justify-center items-between gap-space16 hover:-translate-y-4 duration-300'>
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

export default Features