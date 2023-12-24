import React, { useState } from 'react'
import { Icon } from '@iconify/react';

const menuList = [
    { id: 1, name: 'Home', icon: 'heroicons:home-solid', link: '#home' },
    { id: 2, name: 'Features', icon: 'streamline:baggage', link: '#features' },
    { id: 3, name: 'Resume', icon: 'lucide:users', link: '#resume' },
    { id: 4, name: 'Clients', icon: 'tdesign:usergroup', link: '#clients' },
    { id: 5, name: 'Pricing', icon: 'akar-icons:price-cut', link: '#pricing' },
    { id: 6, name: 'Portfolio', icon: 'uil:layer-group', link: '#portfolio' },
    { id: 7, name: 'Blog', icon: 'fluent:image-globe-20-regular', link: '#blog' },
    { id: 8, name: 'Contact', icon: 'bx:message-rounded-dots', link: '#contact' },
]

const MenuList = () => {
    const [active, setActive] = useState(menuList[0].link)

    return (
        <ul className='px-space20  pt-space24 space-y-space12'>
            {menuList.map((item) => (
                <li key={`menu${item.id}`} onClick={() => setActive(() => item.link)}>
                    <a href={item.link} className={`aside_menu_item ${active === item.link ? 'text-secondary-100' : 'text-100'}`}>
                        <Icon icon={item.icon} />
                        <span>{item.name}</span>
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default MenuList