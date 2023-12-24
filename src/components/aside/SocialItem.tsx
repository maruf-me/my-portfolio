import React from 'react'
import { Icon } from '@iconify/react';

type ISocialItem = {
    id: number;
    name: string;
    icon: string;
    link: string;
}

const SocialItem = ({ icon, link }: ISocialItem) => {
    return (
        <a href={link} target='_blank'>
            <div className="h-[5.4rem] w-[5.4rem] flex items-center justify-center rounded-xl bg-gradient-1 transform hover:-translate-y-3 duration-300 shadow-1 relative text-xl text-100 hover:text-secondary-100 group">
                <span className={`bg-gradient-2 opacity-0 duration-500 absolute w-full h-full rounded-xl top-0 left-0 group-hover:opacity-100 z-10`}></span>

                <span className="relative z-20"> <Icon icon={icon} /></span>
            </div>
        </a>
    )
}

export default SocialItem