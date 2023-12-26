import React from 'react'

type IProps = { id: string; children: React.ReactNode }

const SectionWrapper = ({ id, children }: IProps) => {
    return (
        <section id={id} className='px-space20'>
            <div className="min-h-screen border-b border-black py-[6rem] flex flex-col justify-center gap-space32 lg:gap-space40">
                {children}
            </div>
        </section>
    )
}

export default SectionWrapper;