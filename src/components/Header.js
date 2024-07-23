import { LOGO_URL } from "../utils/constants";
import { useState} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//Header
const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    //Use Selector (Hook) to subscribe the store
    const cartItem = useSelector((store) => store.cart.items);
    // console.log(cartItem);

    return (
        <div className="w-[100%] h-24 flex justify-between border bg-gradient-to-br from-gray-300 via-yellow-200 to-red-300 sticky top-0 z-50">
           <div>
            <img className="w-20 h-20 border rounded-full ml-2" src={LOGO_URL} />
            </div>
            <div className="">
                <ul className="flex">

                    <li className="mr-4 my-7 header-element">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="mr-4 my-7 header-element">
                        <Link to="/about">About Us</Link>
                    </li>

                    <li className="mr-4 my-7 header-element">
                        <Link to="/contact">Contact Us</Link>
                    </li>

                    <Link to="/cart">
                    <li className="mr-4 my-7 header-element">Cart {cartItem.length}</li>
                    </Link>

                    <button className="mr-4 " onClick={() => {
                        setBtnName(btnName === "Login" ? "Logout" : "Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
        
    )
}

export default Header;