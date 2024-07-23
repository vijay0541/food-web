import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    //subscribe the store
    const storeItem = useSelector((store) => store.cart.items);
    // console.log(storeItem);

    const dispatch = useDispatch();
    
    const handleClearItem = () => {
        dispatch(clearCart());
    }

    return (
        <div className="flex flex-col justify-center">
            <div className="w-6/12 m-2 p-2 text-3xl font-bold text-center mx-auto border-b shadow-md">Cart</div>
            <div className="flex flex-col w-6/12 p-2 mx-auto">
            {storeItem.map((element) => <CategoryCard cardInfo={element}/>)}
            </div>
            <span className="w-28 border text-center mx-auto mb-3 rounded-full bg-gray-500 cursor-pointer p-1 font-semibold uppercase" onClick={handleClearItem}>Clear Cart</span>
        </div>
    )
}

export default Cart;