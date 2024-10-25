import { useState } from 'react';

export type ITabItem = {
    title: string;
    id: string | number;
}

type IProps = {
    className?: string;
    itemClasses?: string;
    tabItems: ITabItem[];
}

const Tab = ({ tabItems, itemClasses = '', className = '' }: IProps) => {

    const [tab, setTab] = useState<string | number>(tabItems[0].id);

    return (
        <div className={`w-full bg-inherit  shadow-1 ${className}`}>

            {tabItems.map((item) => (
                <div
                    key={item.id}
                    onClick={() => setTab(() => item.id)}
                    className={`py-space16 px-space20 text-lg font-medium text-center rounded-xl duration-300 cursor-pointer ${tab === item.id ? 'text-secondary-100 bg-gradient-1 shadow-1' : 'text-100 hover:text-secondary-100 hover:bg-gradient-1 hover:shadow-1'} ${itemClasses}`}>
                    {item.title}
                </div>
            ))}

        </div>
    )
}

export default Tab;

