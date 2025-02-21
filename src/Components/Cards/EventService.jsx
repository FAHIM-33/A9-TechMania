import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
 
const EventService = () => {
    let [data, setData] = useState([])

    useEffect(() => {
        axios.get('/cards.json')
            .then(res => setData(res.data))
    }, [])


    return (
        <section className="p-4 lg:mt-24 mt-10 ">
            <div className="flex items-center  justify-center" data-aos='fade-right'>
                <h2
                    className="mt-4 md:mt-0 whitespace-nowrap pl-4 w-fit lg:text-5xl md:text-4xl text-2xl font-semibold  mb-8 lg:py-0">
                    <span className="text-cyan-400">E</span>vent
                    <span className="text-amber-400">S</span>
                    ervices
                </h2>
                <div className="bg-[#ffffff3a] w-full h-[2px]"></div>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {
                    data.map(obj => <Card
                        key={obj.id}
                        data={obj}
                    ></Card>)
                }
            </div>
        </section>
    );
};

export default EventService;