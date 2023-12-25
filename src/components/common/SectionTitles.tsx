import React from 'react'

type IProps = {
  text?: string
  className?: string
  children?: React.ReactNode
}

export const SectionTitle = ({children, className, text}: IProps) => {
  return (
    <p className={`font-semibold text-secondary-100 text-center uppercase text-md ${className}`}>
      {text}
      {children}
    </p>
  )
}


export const SectionHeaderTitle = ({children, className, text}: IProps) => {
  return (
    <p className={`font-extrabold text-100 text-center text-xl sm:text-[3rem] lg:text-[4rem] 2xl:text-[6rem] ${className}`}>
      {text}
      {children}
    </p>
  )
}