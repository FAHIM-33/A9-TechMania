import { NavLink } from "react-router-dom";


const Navbar = () => {
    let links = <>
        <li><NavLink to="/" className="p-2 rounded-md block">HOME</NavLink></li>
        <li><NavLink to="/2" className="p-2 rounded-md block">TWO</NavLink></li>
        <li><NavLink to="/3" className="p-2 rounded-md block">Three</NavLink></li>
    </>
    return (
        <div>
            <nav className="grid items-center grid-cols-3 bg-[#111] m-1 rounded-md px-2 py-1 abosolute z-20 ">
                <div>
                    <p className="font-semibold">
                        <span className="text-cyan-400 text-2xl">T</span>ech<span className="text-amber-400 text-2xl">M</span>ania
                    </p>
                </div>
                <ul className="font-semibold flex justify-center gap-6">
                    {links}
                </ul>
                <div className=" "></div>

            </nav>
        </div>
    );
};

export default Navbar;