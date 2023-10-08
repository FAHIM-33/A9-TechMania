import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import MemberCard from "../Components/Comments/MemberCard";
import Footer from "../Components/Footer";


const Membership = () => {
    let [data, setData] = useState([])

    useEffect(() => {
        axios.get("/membership.json")
            .then(res => setData(res.data))
    }, [])

    return (
        <div>
            <div className='bg-[#111] m-1 rounded-md'>
                <Navbar></Navbar>
            </div>
            <h2 className="text-4xl text-center mb-12 mt-20 pr-4">Purchase our premium membership or get started for free</h2>
            <section className="grid grid-cols-3 gap-8 p-4 mb-20">
                {
                    data.map(obj => <MemberCard
                        key={obj.id}
                        data={obj}
                    ></MemberCard>)
                }
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Membership;