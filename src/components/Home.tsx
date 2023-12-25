import React from 'react'

const Home = () => {
    var i = 0;
    var txt = 'Lorem ipsum dummy text blabla.';
    var speed = 50;

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("demo").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    return (
        <section id='home'>
            <div className="bg-[url('/images/background_image.jpg')] h-screen bg-cover bg-fixed bg-no-repeat relative">
                <span className="absolute bg-primary-100 opacity-50 left-0 top-0 w-full h-full z-10"></span>

                <div className="relative z-20 h-full flex flex-col justify-center">
                    <h1 className="text-[10rem] font-extrabold text-100 text-center">
                        MD Maruf Hossain
                    </h1>

                    <div className="input-wrapper">
                        <input aria-label="Ask us anything" />
                        <span className="placeholder"></span>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Home