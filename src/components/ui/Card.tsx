import React from 'react';

type IProps = {
    className?: string;
    children?: React.ReactNode;
    hoverEffect?: boolean;
}

const Card = ({ children, className, hoverEffect = true }: IProps) => {
    return (
        <div className={`rounded-xl bg-gradient-1 duration-300 shadow-1 relative ${hoverEffect && 'group'} ${className}`}>
            <span className={`bg-gradient-2 opacity-0 duration-500 absolute w-full h-full rounded-xl top-0 left-0 ${hoverEffect && 'group-hover:opacity-100'} z-10`}></span>
            <div className="relative z-20">{children}</div>
        </div>
    )
}

export default Card