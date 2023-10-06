import Marquee from "react-fast-marquee";


const Banner = () => {
    return (
        <section className="banner pt-24">
            <h1 className="text-7xl font-semibold text-center w-3/4 mx-auto">Let&apos;s make the World better with  <span className="text-cyan-500 text-8xl">T</span>echnologies</h1>
            <div className="mt-36 marque">
                <Marquee autoFill="true">
                    <img className="w-24" src="/logos/pngwing.com(1).png" alt="" />
                    <img className="w-36" src="/logos/pngwing.com(2).png" alt="" />
                    <img className="w-36" src="/logos/pngwing.com(3).png" alt="" />
                    <img className="w-36" src="/logos/pngwing.com(4).png" alt="" />
                    <img className="w-48" src="/logos/pngwing.com(5).png" alt="" />
                    <img className="w-36" src="/logos/pngwing.com.png" alt="" />
                </Marquee>
            </div>
        </section>
    );
};

export default Banner;