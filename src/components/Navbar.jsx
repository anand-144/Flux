import { Link } from "react-router-dom";
import { logo } from "../assets";
import { TiThMenuOutline } from "react-icons/ti";
import { AiFillCloseCircle, AiOutlineLogin } from "react-icons/ai";
import { PiSignOutThin } from "react-icons/pi";
import { useState } from "react";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);

    return (    
        <div className="w-full h-[80px] z-50 bg-violet-500 fixed top-0 left-0 shadow-lg">
            <div className="flex justify-between items-center h-full">
                <div className="flex items-center">
                    <img src={logo} className="sm:ml-10 ss:ml-10 md:ml-3 w-full h-[35px] m-5" alt="logo" />
                </div>

                <div className="hidden md:flex font-medium text-white space-x-6">
                    <li className="hover:text-purple-950">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:text-purple-950">
                        <Link to="/About">About</Link>
                    </li>
                </div>

                <div className="md:hidden text-white" onClick={handleClick}>
                    {toggle ? (
                        <AiFillCloseCircle className="w-[28px] h-[28px] object-contain mr-10"/>
                    ) : (
                        <TiThMenuOutline className="w-[28px] h-[28px] object-contain mr-10"/>
                    )}
                </div>
            </div>

            <ul className={toggle ? 'absolute text-white bg-violet-500 w-full px-8 md:hidden text-xl font-medium drop-shadow text-center xs:text-[1.5rem] top-20' : 'hidden'}>
                <li className="hover:text-purple-950">
                    <Link to="/">Home</Link>
                </li>
                <li className="hover:text-purple-950">
                    <Link to="/About">About</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
