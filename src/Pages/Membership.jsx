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
            <h2 className="lg:text-4xl md:text-3xl text-xl text-center md:mb-12 mb-4 md:mt-20 mt-6 lg:pr-4 p-2 md:p-0">Purchase our premium membership or get started for free</h2>
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:mb-20 mb-8">
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