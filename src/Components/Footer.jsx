import { BsGithub, BsFacebook, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";


const Footer = () => {
    return (
        <footer className="bg-[#111] pt-4 pb-4">
            <div className="text-center" data-aos="zoom-in">
                <p className="font-semibold md:text-sm text-xs">
                    <span className="text-cyan-400 md:text-xl text-base">T</span>ech<span className="text-amber-400 md:text-xl text-base">M</span>ania
                </p>
            </div>
            <div className="flex justify-center items-center mt-4 text-sm">
                <MdOutlineLocationOn className="text-amber-400"/>
                <p className="text-gray-300 md:text-base text-xs">Visit us at : </p> 
            </div>
                <p className="text-center font-light md:text-base text-xs">Gulshan Road, block E,Techmania Tower,263/6, Dhaka 1220</p>
            <p className="text-center mt-4 mb-3 md:text-base text-sm">Social</p>
            <div className="flex justify-center gap-4 md:text-xl text-sm text-amber-400">
                <BsFacebook />
                <BsInstagram />
                <BsTwitter />
                <BsLinkedin />
                <BsGithub />
            </div>
            <small className="text-center block text-gray-500 mt-4">Service Policy & Terms and conditions</small>
            <small className="text-gray-400 text-center block mt-2">All rights reserved. TechMania&#8482;</small>
        </footer>
    );
};

export default Footer;