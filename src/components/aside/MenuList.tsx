import Icon from '@/components/common/Icon';
import { menuList } from '@/data';
import { useWatcherSection } from '@/hooks/useWatcherSection';

const MenuList = () => {
    const { activeSection, activeSectionById } = useWatcherSection({
        sections: menuList,
        defaultSection: menuList[0].id,
    })

    return (
        <ul className='px-space32 space-y-space12 overflow-y-scroll'>
            {menuList.map((item) => (
                <li
                    key={`${item.id}`}
                    onClick={() => activeSectionById(item.id)}
                    className={`aside_menu_item ${activeSection === item.id ? 'text-secondary-100' : 'text-100'}`}
                >
                    <Icon icon={item.icon} height={20} width={20} />
                    <span>{item.name}</span>
                </li>
            ))}
        </ul>
    )
}

export default MenuList