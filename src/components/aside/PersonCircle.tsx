import { BorderTrail } from '../animations/BorderTrail';
import Image from '../common/Image';

const PersonCircle = () => {
    return (
        <div className='mt-space24'>
            <div className="relative rounded-full mx-auto max-w-max">

                <BorderTrail
                    style={{
                        boxShadow:
                            '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
                    }}
                    size={90}
                    className='border-[1rem]'
                    trailStyle='border-[.2rem]'
                />
                <div className="min-h-[16rem] min-w-[16rem] h-[14rem] w-[16rem] rounded-full shadow-1 overflow-hidden  border-[.5rem] border-primary-90">

                    <Image src="/images/person.png" alt="hero" width={180} height={180} className='object-cover h-full w-full' />
                </div>
            </div>
        </div>
    )
}

export default PersonCircle