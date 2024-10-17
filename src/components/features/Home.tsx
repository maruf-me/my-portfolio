'use client';
import { TextEffect } from '@/components/animations/TextEffect';
import Image from '@/components/common/Image';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

const typingText = [
    `Web Designer.`, 2000,
    `Web Developer.`, 3000,
    `Professional Coder.`, 2000,
    `Front-End Developer.`, 3000,
]

const Home = () => {
    return (
        <section id='home'>
            <div className="bg-[url('/images/background_image.jpg')] sm:h-[52vh] md:h-[66vh] xl:h-screen bg-contain lg:bg-cover bg-fixed bg-no-repeat relative">
                <span className="absolute bg-primary-100 opacity-50 left-0 top-0 w-full h-full z-10"></span>

                <article className="relative z-20 h-full flex flex-col justify-center items-center gap-space4 lg:gap-space20 px-space20 py-space24">
                    <article className="flex items-center gap-3">
                        <TextEffect per='char' preset='fade' className="font-extrabold text-100 text-center text-[2.4rem] lg:text-[6rem]">
                            {"Hi there!"}
                        </TextEffect>

                        <Image src={`/images/hello.gif`} alt='' width={0} height={0} sizes='100vw' className='w-10 md:w-24' />
                    </article>
                    <TextEffect per='char' preset='fade' className="font-extrabold text-100 text-center text-[2.4rem] lg:text-[6rem]">
                        {"This is MD Maruf Hossain"}
                    </TextEffect>

                    <article className='text-center text-100 font-bold text-md sm:text-xl lg:text-[4rem]'>
                        <span>I am a </span>

                        <TypeAnimation
                            speed={75}
                            repeat={Infinity}
                            deletionSpeed={50}
                            sequence={typingText}
                            className='text-secondary-100'
                        />
                    </article>

                    <Link href={'#features'}>
                        <Button className='max-w-max h-[4rem] md:h-auto text-xs  px-space32 sm:px-[5rem] shadow-none sm:mt-space32'>Learn More</Button>
                    </Link>
                </article>
            </div>
        </section>
    )
}

export default Home