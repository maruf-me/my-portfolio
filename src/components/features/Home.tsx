'use client';
import Button from '@/components/common/Button';
import { TypeAnimation } from 'react-type-animation';
import { TextEffect } from '../ui/TextEffect';

const typingText = [
    `Web Designer.`, 2000,
    `Web Developer.`, 3000,
    `Professional Coder.`, 2000,
    `Front-End Developer.`, 3000,
]

const Home = () => {
    return (
        <section id='home'>
            <div className="bg-[url('/images/background_image.jpg')] sm:h-[40vh] md:h-[66vh] xl:h-screen bg-contain md:bg-cover bg-fixed bg-no-repeat relative bg-red-300">
                <span className="absolute bg-primary-100 opacity-50 left-0 top-0 w-full h-full z-10"></span>

                <article className="relative z-20 h-full flex flex-col justify-center items-center gap-space4 sm:gap-space20 px-space20 py-space24">
                    <TextEffect per='char' preset='fade' className="font-extrabold text-100 text-center uppercase text-[2.4rem] sm:text-[6rem]">
                        Welcome
                    </TextEffect>
                    {/* <h1 className="font-extrabold text-100 text-center uppercase text-[4rem] sm:text-[6rem] lg:text-[8rem] 2xl:text-[12rem]">
                    </h1> */}

                    <article className='text-center text-100 font-bold text-md sm:text-[3rem] lg:text-[4rem]'>
                        <span>I am a </span>

                        <TypeAnimation
                            speed={75}
                            repeat={Infinity}
                            deletionSpeed={50}
                            sequence={typingText}
                            className='text-secondary-100'
                        />
                    </article>

                    <Button className='max-w-max h-[4rem] md:h-auto text-xs  px-space32 sm:px-[5rem] shadow-none sm:mt-space32 uppercase'>Contact Me</Button>
                </article>
            </div>
        </section>
    )
}

export default Home