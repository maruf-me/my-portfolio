import { menuList } from '@/data';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';

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