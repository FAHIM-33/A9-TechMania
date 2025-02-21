import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";



const Details = () => {
    let { data } = useLoaderData()
    let { id } = useParams()
    let card = data.find(obj => obj.id === id * 1)

    return (
        <div id="details-page"
            className="h-[95vh]"
            style={{
                backgroundImage: `url('${card.image}')`,
            }}>
            <div className='bg-[#111] p-[1px] rounded-md'>
                <Navbar></Navbar>
            </div>
            <div className="bg-[#000000a2] h-full lg:p-12 md:p-8 p-4 backdrop-blur-md">
                <h2 className="lg:text-6xl md:text-4xl text-2xl font-medium text-center"><span className="text-gray-300">{card.name}_</span> <span className="lg:text-3xl md:text-xl text-base text-cyan-400 font-light">event</span></h2>

                <div className="flex flex-col md:flex-row lg:gap-12 md:gap-6 gap-4 p-8 justify-center items-center mt-8">
                    <figure className="md:w-4/12">
                        <img className="w-full" src={card.image} alt="" />
                    </figure>
                    <div className="md:w-1/2 ">
                        <p className="text-gray-500 font-light md:text-base text-sm text-end">{card.date}</p>
                        <h2 className="border-l-2 border-amber-400 py-1 lg:text-xl md:text-lg text-base text-cyan-300 font-light">{card.discription}</h2>
                        <p className="text-end text-amber-400 font-light">Join only for <span className="lg:text-7xl md:text-5xl text-4xl">${card.price}</span></p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default Details;