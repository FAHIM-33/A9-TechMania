import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";


const Navbar = () => {
    let { user, logOut } = useContext(AuthContext)
    console.log(user, typeof (logOut))
    let links = <>
        <li><NavLink to="/" className="p-2  block">HOME</NavLink></li>
        <li><NavLink to="/2" className="p-2  block">TWO</NavLink></li>
        <li><NavLink to="/3" className="p-2  block">Three</NavLink></li>
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
                {
                    user ? <div className="flex justify-end gap-4 items-center">
                        <p>{user?.displayName}</p>
                        <figure>
                            {
                                user?.photoURL ? <img className="rounded-full w-10" src={user.photoURL} alt="" />
                                    :
                                    <img className="rounded-full w-10" src="https://i.ibb.co/FwYsHLt/pngwing-com-1.png" alt="" />
                            }
                        </figure>
                        <button onClick={() => logOut()} className="btn bg-[#222] rounded-md font-medium text-lg">Log Out</button>
                    </div>
                        :
                        <div className="flex justify-end gap-4 items-center">
                            <Link to="/login"><button className="btn bg-[#222] rounded-md font-medium text-lg">Login</button></Link>
                        </div>
                }


            </nav>
        </div>
    );
};

export default Navbar;