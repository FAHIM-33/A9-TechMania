import Marquee from "react-fast-marquee";
import Navbar from "./Navbar";


const Banner = () => {
    return (
        <section className="banner">
            <div className='md:block  m-1 rounded-md backdrop-blur-sm border border-[#111]'>
                <Navbar></Navbar>
            </div>

            <h1 className="pt-24 lg:pt-20 xl:pt-32 xl:text-7xl md:text-4xl text-3xl font-semibold text-center md:w-3/4 mx-auto">Let&apos;s make the <span className="text-amber-400 lg:text-5xl xl:text-8xl text-4xl md:text-5xl">W</span>orld better with  <span className="text-cyan-500 lg:text-5xl xl:text-8xl md:text-5xl text-4xl">T</span>echnologies_</h1>
            <div className="xl:mt-36 lg:mt-8 md:mt-24 mt-8 marque">
                <Marquee autoFill="true">
                    <img className="lg:w-24 xl:w-36 w-10 md:w-20" src="https://i.ibb.co/KsNgSWy/pngwing-com-1.png" alt="" />
                    <img className="lg:w-24 xl:w-36 w-10 md:w-20" src="https://i.ibb.co/1969q2p/pngwing-com-2.png" alt="" />
                    <img className="lg:w-24 xl:w-40 w-16 md:w-24" src="https://i.ibb.co/BVXCVgc/pngwing-com-3.png" alt="" />
                    <img className="lg:w-24 xl:w-36 w-10 md:w-20" src="https://i.ibb.co/FXhqWxd/pngwing-com-4.png" alt="" />
                    <img className="lg:w-24 xl:w-48 md:w-36 w-20" src="https://i.ibb.co/R3mtQ79/pngwing-com-5.png" alt="" />
                    <img className="lg:w-24 xl:w-36 w-10 md:w-20" src="https://i.ibb.co/s3rxYjY/pngwing-com.png" alt="" />
                </Marquee>
            </div>
        </section>
    );
};

export default Banner;