import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../Components/Footer";


const Details = () => {
    let { data } = useLoaderData()
    let { id } = useParams()
    let card = data.find(obj => obj.id === id * 1)

    return (
        <div
            className="h-[95vh] "
            style={{
                backgroundImage: `url('${card.image}')`,
                backgroundSize: '80% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
            <div className="bg-[#000000a2] h-full backdrop-blur-lg p-12 ">
                <h2 className="text-6xl font-medium text-center"><span className="text-gray-300">{card.name}_</span> <span className="text-3xl text-cyan-400 font-light">event</span></h2>
                <div className="flex gap-12 p-8 justify-center items-center mt-8">
                    <figure className="w-4/12">
                        <img className="w-full" src={card.image} alt="" />
                    </figure>
                    <div className="w-1/2 ">
                    <p className="text-gray-500 font-light text-end">{card.date}</p>
                        <h2 className="border-l-2 border-amber-400 py-1 text-xl text-cyan-300 font-light">{card.discription}</h2>
                        <p className="text-end text-amber-400 font-light">Join only for <span className="text-7xl ">${card.price}</span></p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default Details;