import Marquee from "react-fast-marquee";
import Navbar from "./Navbar";


const Banner = () => {
    return (
        <section className="banner">
            <div className='m-1 rounded-md backdrop-blur-sm border border-[#111]'>
                <Navbar></Navbar>
            </div>
            <h1 className="pt-32 text-7xl font-semibold text-center w-3/4 mx-auto">Let&apos;s make the <span className="text-amber-400">W</span>orld better with  <span className="text-cyan-500 text-8xl">T</span>echnologies_</h1>
            <div className="mt-36 marque">
                <Marquee autoFill="true">
                    <img className="w-24" src="https://i.ibb.co/KsNgSWy/pngwing-com-1.png" alt="" />
                    <img className="w-36" src="https://i.ibb.co/1969q2p/pngwing-com-2.png" alt="" />
                    <img className="w-36" src="https://i.ibb.co/BVXCVgc/pngwing-com-3.png" alt="" />
                    <img className="w-36" src="https://i.ibb.co/FXhqWxd/pngwing-com-4.png" alt="" />
                    <img className="w-48" src="https://i.ibb.co/R3mtQ79/pngwing-com-5.png" alt="" />
                    <img className="w-36" src="https://i.ibb.co/s3rxYjY/pngwing-com.png" alt="" />
                </Marquee>
            </div>
        </section>
    );
};

export default Banner;