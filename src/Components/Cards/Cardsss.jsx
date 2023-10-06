import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";


const Cardsss = () => {
    let [data, setData] = useState([])

    useEffect(() => {
        axios.get('/cards.json')
            .then(res => setData(res.data))
    }, [])


    return (
        <section>
            <h2 className="text-5xl font-semibold text-center mt-12 mb-8">Our Services</h2>
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

export default Cardsss;