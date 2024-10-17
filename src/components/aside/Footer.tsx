import { socialItems } from '@/data'
import Button from '../ui/Button'
import SocialItem from './SocialItem'

const Footer = () => {
    return (
        <div className=" px-space32 w-full pb-space20 space-y-space24 pt-space24 border-t border-primary-90">
            <Button variant='primary' className='w-full'>Hire Me</Button>

            <div className="flex justify-between">
                {socialItems.map((item) => <SocialItem key={item.id} {...item} />)}
            </div>
        </div>
    )
}

export default Footer