import React from 'react';

type IProps = {
    className?: string;
    children?: React.ReactNode;
}

const Card = ({children, className}: IProps) => {
    return (
        <div className={`rounded-xl p-space12 bg-gradient-1 duration-300 shadow-1 relative group ${className}`}>
            <span className={`bg-gradient-2 opacity-0 duration-500 absolute w-full h-full rounded-xl top-0 left-0 group-hover:opacity-100 z-10`}></span>
            <div className="relative z-20">{children}</div>
        </div>
    )
}

export default Card