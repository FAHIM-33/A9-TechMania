import pt from "prop-types"
import "./card.css"
import { Link } from "react-router-dom";

const Card = ({ data }) => {
    let { id, name, image, price, discription, date } = data;



    return (
        <div className=" event-card overflow-hidden relative">
            <img className="w-full block" src={image} alt="" />
            {/* bg-[#000000af] */}
            <div className="text-[#ffffffe0] absolute w-full bottom-0 right-0 bg-gradient-to-b from-[#ffffff1e] to-[#000000] backdrop-blur-sm p-4">
                <h3 className="text-3xl mb-4 font-semibold text-center">{name}</h3>
                <p className="text-sm">{discription.slice(0, 80)}...see more</p>
                <div className="flex items-center justify-between">
                    <p className="text-3xl font-bold text-amber-400"><span className="text-4xl">$</span>{price}</p>
                    <p className="text-[#ffffff86] font-bold text-sm">{date}</p>
                </div>
                <Link to={`/details/${id}`}>
                    <button className="btn rounded-sm bg-gray-700 w-full text-xl font-medium text-white">Details</button>
                </Link>
            </div>
        </div>
    );
};
Card.propTypes = {
    data: pt.object,
}
export default Card;