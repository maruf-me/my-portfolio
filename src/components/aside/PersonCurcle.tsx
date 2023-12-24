import React from 'react'
import Image from '../common/Image';

const PersonCurcle = () => {
    return (
        <div className="h-[18rem] w-[18rem] mx-auto rounded-full shadow-1 overflow-hidden  border-[.5rem] border-primary-90">
            <Image src="/images/person.png" alt="hero" width={180} height={180} className='object-cover h-full w-full' />

        </div>
    )
}

export default PersonCurcle