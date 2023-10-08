import axios from "axios";
import { useEffect, useState } from "react";
import Comm from "./Comm";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Comments = () => {
    let [comm, setComm] = useState([])
    useEffect(() => {
        axios.get('/comments.json')
            .then(data => setComm(data.data))
    }, [])
    return (
        <section className="mt-12">
            <div className="flex items-center justify-center text-gray-300" data-aos="fade-right">
                <h2 className="whitespace-nowrap pl-4  w-fit text-5xl font-semibold  mb-8 rounded-md py-4"><span className="text-cyan-400">C</span>ontributor <span className="text-amber-400">C</span>ompanies</h2>
                <div className="bg-[#ffffff3a]  w-full h-[2px]"></div>
            </div>
            <h2 className="text-center text-3xl text-gray-300 underline">Leading tech companies comment about us</h2>
            <div className="grid grid-cols-2 gap-4 py-8 px-12">
                {
                    comm.map(obj => <Comm
                        key={obj.id}
                        data={obj}
                    ></Comm>)
                }
            </div>

        </section>
    );
};

export default Comments;