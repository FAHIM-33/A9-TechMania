import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";


const EventService = () => {
    let [data, setData] = useState([])

    useEffect(() => {
        axios.get('/cards.json')
            .then(res => setData(res.data))
    }, [])


    return (
        <section className="p-4 mt-24">
            <div className="flex items-center justify-center ">
                <h2 className="whitespace-nowrap pl-4  w-fit text-5xl font-semibold  mb-8 rounded-md py-4"><span className="text-cyan-400">E</span>vent <span className="text-amber-400">S</span>ervices</h2>
                <div className="bg-[#ffffff3a]  w-full h-[2px]"></div>
            </div>

            <div className="grid grid-cols-3 gap-4">
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