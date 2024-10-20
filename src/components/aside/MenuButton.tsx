import { Icon } from '@iconify/react';


const MenuButton = () => {
    return (
        <button className='fixed z-40 max-w-max p-1 top-space8 right-space8 xl:hidden text-secondary-100 text-xl hover:-translate-y-1 hover:scale-105 active:translate-y-2 duration-300 shadow-2 rounded-lg'>
            <Icon icon="carbon:menu" />
        </button>
    )
}

export default MenuButton