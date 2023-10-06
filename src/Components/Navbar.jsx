import { NavLink } from "react-router-dom";


const Navbar = () => {
    let links = <>
        <li><NavLink to="/" className="p-2 rounded-md block">HOME</NavLink></li>
        <li><NavLink to="/2" className="p-2 rounded-md block">TWO</NavLink></li>
        <li><NavLink to="/3" className="p-2 rounded-md block">Three</NavLink></li>
    </>
    return (
        <div>
            <nav className="grid grid-cols-3 bg-[#111] m-1 rounded-md px-2 py-1 abosolute z-20 ">
                <div></div>
                <ul className="font-semibold flex justify-center gap-6">
                    {links}
                </ul>
                <div className=" "></div>

            </nav>
        </div>
    );
};

export default Navbar;