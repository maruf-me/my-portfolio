import React from 'react'
import { socialItems } from '@/data'
import Button from '../common/Button'
import SocialItem from './SocialItem'

const Footer = () => {
    return (
        <div className="w-full pb-space20 space-y-space24">
            <Button btnType='primary' className='w-full'>Hire Me</Button>

            <p className="text-100 uppercase text-md text-center font-semibold pt-space24 border-t border-primary-90">Find with me</p>

            <div className="flex justify-between">
                {socialItems.map((item) => <SocialItem key={item.id} {...item} />)}
            </div>
        </div>
    )
}

export default Footer