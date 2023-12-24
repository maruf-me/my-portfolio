import React from 'react';

type IButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {btnType?: 'primary' | 'secondary'}

const Button = (props: IButton) => {
    return (
        <button {...props} className={`w-full p-space12 rounded-xl text-lg font-semibold text-100 shadow-1 hover:text-secondary-100 hover:-translate-y-1 hover:scale-105 active:translate-y-2 duration-300 relative group ${props.btnType === 'primary'? 'bg-gradient-2':'bg-gradient-1'}  ${props.className}`}>
            <span className={`bg-gradient-2 opacity-0 duration-500 absolute w-full h-full rounded-xl top-0 left-0 group-hover:opacity-100 z-10`}></span>
           
            <div className="z-20 relative">{props.children}</div>
        </button>
    )
}

export default Button