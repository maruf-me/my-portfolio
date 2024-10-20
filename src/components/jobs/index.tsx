import { SectionHeaderTitle, SectionTitle } from '@/components/common/SectionTitles'
import SectionWrapper from '@/components/common/SectionWrapper'
import Tab, { ITabItem } from '@/components/common/Tab'
import Card from '@/components/ui/Card'

const tabItems: ITabItem[] = [
  { id: 'btn', title: 'Button' },
  { id: 'card', title: 'Card' },
  { id: 'modal', title: 'Modal' },
  { id: 'drawer', title: 'Drawer' },
  { id: 'carousel', title: 'Carousel' },
  { id: 'accordion', title: 'Accordion' },
  { id: 'border-trail', title: 'Border Trail' },
  { id: 'counter', title: 'Counter Number' },
  { id: 'dock', title: 'Dock' },
  { id: 'spring', title: 'Spring Text' }
]

const AwesomeComponents = () => {
  return (
    <SectionWrapper id="components">
      <SectionTitle text="Build this components" className='sticky top-0 z-20 bg-primary-100/90 py-space8' />
      <SectionHeaderTitle text='Awesome Components' className='leading-10 sm:leading-relaxed' />

      <section className="grid grid-cols-12 gap-space24 h-full py-space24">
        <div className="col-span-3">
          <div className="sticky top-space56 w-full">
            <Tab tabItems={tabItems} className='' />
          </div>
        </div>

        <div className="col-span-9">
          <div className="grid grid-cols-3 gap-space20">
            {Array(20).fill(0).map((item, i) => (
              <Card key={i} className='h-[20rem]'>this is client</Card>
            ))}
          </div>
        </div>
      </section>
    </SectionWrapper>
  )
}

export default AwesomeComponents
