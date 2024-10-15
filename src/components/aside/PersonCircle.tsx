import Image from '../common/Image';

const PersonCircle = () => {
    return (
        <div className="mt-space24 min-h-[16rem] min-w-[16rem] h-[14rem] w-[16rem] mx-auto rounded-full shadow-1 overflow-hidden  border-[.5rem] border-primary-90">
            <Image src="/images/person.png" alt="hero" width={180} height={180} className='object-cover h-full w-full' />

        </div>
    )
}

export default PersonCircle