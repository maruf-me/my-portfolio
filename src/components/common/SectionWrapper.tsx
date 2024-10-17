import React from 'react';

type IProps = { id: string; children: React.ReactNode }

const SectionWrapper = ({ id, children }: IProps) => {
    return (
        <section id={id} className='px-space20 relative'>
            <div className="md:min-h-screen border-b border-black py-space24 flex flex-col justify-center">
                {children}
            </div>
        </section>
    )
}

export default SectionWrapper;