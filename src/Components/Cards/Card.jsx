import pt from "prop-types"
import "./card.css"
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Card = ({ data }) => {
    let { id, name, image, price, discription, date } = data;



    return (
        <div className=" event-card overflow-hidden relative rounded-sm" data-aos='zoom-in'>
            <img className="w-full block" src={image} alt="" />
            <div className="text-[#ffffffe0] absolute w-full bottom-0 right-0 bg-gradient-to-b from-[#ffffff1e] to-[#000000] backdrop-blur-sm p-4">
                <h3 className="lg:text-3xl md:text-2xl text-2xl mb-2 font-semibold text-center bg-[#00000028]">{name}</h3>
                <Marquee speed={90}>
                    <p id="discription" className="text-sm">{discription.slice(0, 40)}&nbsp;&nbsp;&nbsp; ...see more&nbsp;&nbsp;&nbsp;</p>
                </Marquee>
                <div className="flex items-center justify-between mb-2 mt-1">
                    <p className="md:text-3xl text-xl font-medium text-amber-400"><span className="md:text-4xl text-2xl">$</span>{price}</p>
                    <p className="text-[#ffffff86] font-bold text-sm">{date}</p>
                </div>
                <Link to={`/details/${id}`}>
                    <button className="btn rounded-sm bg-[#22222259] w-full md:text-xl text-base font-medium text-white">Details</button>
                </Link>
            </div>
        </div>
    );
};
Card.propTypes = {
    data: pt.object,
}
export default Card;