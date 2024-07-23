import { useDispatch } from "react-redux";
import {addItem} from "../utils/cartSlice"
import { CARD_URL } from "../utils/constants";

const CategoryCard = ({cardInfo}) => {
    // console.log(cardInfo);
    const imageId = cardInfo.imageId;

    //dispatch come from the useDispatch (hook)
    const dispatch = useDispatch();

    const handleAddItem = (cardInfo) => {
        //dispatch an action
        dispatch(addItem(cardInfo));
    };

    return (
        <div className="flex justify-evenly my-2 py-2 border-b-2">
            <div className="w-2/3  flex flex-col">
                <div className="text-lg font-semibold">{cardInfo.name}</div>
                {/* <div className="text-sm">{cardInfo.description}</div> */}
                <div className="mt-2 font-bold">₹ {cardInfo.price ? (cardInfo.price / 100) : (cardInfo.defaultPrice / 100)}</div>
            </div>
            <div className="my-auto flex justify-center relative mr-0">
                <div className="p-2">
                    <img className="w-[100] h-[100] object-cover" src={CARD_URL + imageId}></img>
                </div>
                <span className="absolute bottom-0 bg-black text-white uppercase px-2 rounded-2xl text-xs font-bold cursor-pointer" onClick={() => handleAddItem(cardInfo)}>add</span>
            </div>
        </div>
    )
}

export default CategoryCard;