import Footer from "../Components/Footer";
import Logo from "../Components/Logo";
import Navbar from "../Components/Navbar";

const Contact = () => {
    return (
        <div>
            <div className='bg-[#111] m-1 rounded-md'>
                <Navbar></Navbar>
            </div>
            <article className="my-12">
                <Logo></Logo>
                {/* <h1 className="text-center font-light text-6xl">About us</h1> */}

                <h2 className='flex items-center gap-1 mt-12 mb-8 pl-8'>
                    <span className="block whitespace-nowrap text-amber-400 text-4xl font-light" >Shaping the Future of Tech Events</span>
                    <div className='h-[1px] w-full bg-gray-400'></div>
                </h2>

                <p className="w-4/5 mx-auto  text-xl font-light">At TechMania, we&apos;re passionate about driving innovation and connecting the brightest minds in the tech industry. With a mission to foster collaboration and showcase cutting-edge technologies, we curate events that inspire and empower. Our team is dedicated to creating unforgettable experiences, where industry leaders, startups, and enthusiasts converge to redefine the possibilities of technology. With a commitment to inclusivity and environmental responsibility, we&apos;re not just organizing events; we&apos;re shaping the future of tech excellence.</p>
            <h3 className="text-center text-xl mt-12">Main Branch: </h3>
                <p className="text-center mt-0 text-lg">Gulshan Road, block E,Techmania Tower,263/6, Dhaka 1220</p>

            </article>
        <Footer></Footer>
        </div>
    );
};

export default Contact;