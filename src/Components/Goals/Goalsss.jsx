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
            <div className="flex items-center justify-center text-gray-300 mt-20" data-aos="fade-right">
                <h2 className="whitespace-nowrap pl-4  w-fit text-5xl font-semibold  mb-8 rounded-md py-4"><span className="text-cyan-400">O</span>ur <span className="text-amber-400">G</span>oals</h2>
                <div className="bg-[#ffffff3a]  w-full h-[2px]"></div>
            </div>
            <h2 className="text-center text-3xl underline">We Rush to Achieve the Goals!</h2>
            <div className="p-8 ">
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