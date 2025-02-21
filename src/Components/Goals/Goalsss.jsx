import axios from "axios";
import { useEffect, useState } from "react";
import Goal from "./Goal";


const Goalsss = () => {
    let [data, setData] = useState([])
    useEffect(() => {
        axios.get('/goals.json')
            .then(res => setData(res.data))
    }, [])


    return (
        <section>
            <div className="flex items-center justify-center text-gray-300 lg:mt-20 mt-8 " data-aos="fade-right">
                <h2
                    className=" mt-4 md:mt-0 whitespace-nowrap pl-4 w-fit lg:text-5xl md:text-4xl text-2xl font-semibold  mb-8 lg:py-0">
                    <span className="text-cyan-400">O</span>ur 
                    <span className="text-amber-400"> G</span>
                    oals
                </h2>
                <div className="bg-[#ffffff3a]  w-full h-[2px]"></div>
            </div>
            <h2 className="text-center lg:text-3xl md:text-2xl text-base text-gray-300 underline">We Rush to Achieve the Goals!</h2>
            <div className="lg:p-8 p-2 mb-8">
                {
                    data.map(obj => <Goal
                        key={obj.id}
                        data={obj}
                    ></Goal>)
                }
            </div>

        </section>
    );
};

export default Goalsss;