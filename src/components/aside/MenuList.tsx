import { menuList } from '@/data';
import Link from 'next/link';
import { useState } from 'react';
import Icon from '../common/Icon';

const MenuList = () => {
    const [active, setActive] = useState(menuList[0].link)

    return (
        <ul className='px-space32 space-y-space12 overflow-y-scroll'>
            {menuList.map((item) => (
                <li key={`menu${item.id}`} onClick={() => setActive(() => item.link)}>
                    <Link href={item.link} className={`aside_menu_item ${active === item.link ? 'text-secondary-100' : 'text-100'}`}>
                        <Icon icon={item.icon} height={20} width={20} />
                        <span>{item.name}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default MenuList