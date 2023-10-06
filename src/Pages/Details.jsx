import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    let { data } = useLoaderData()
    let { id } = useParams()
    let card = data.find(obj => obj.id === id * 1)

    return (
        <div
            className="h-[90vh] "
            style={{
                backgroundImage: `url('${card.image}')`,
                backgroundSize: '80% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
            <div className="bg-[#000000a2] h-full backdrop-blur-lg p-12 ">
                <h2 className="text-6xl font-semibold text-center">{card.name}_ <span className="text-3xl text-cyan-400">event</span></h2>
                <div className="flex gap-12 p-8 justify-center items-center mt-8">
                    <figure className="w-4/12">
                        <img className="w-full" src={card.image} alt="" />
                    </figure>
                    <div className="w-1/2 border-l-2 border-amber-400">
                        <h2 className="text-xl text-cyan-300">{card.discription}</h2>
                        <p className="text-end text-amber-400">Only for <span className="text-6xl ">${card.price}</span></p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Details;