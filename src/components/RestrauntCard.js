import { CARD_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestrauntCard = (props) => {
    const {resData} = props;

    const {cloudinaryImageId,id,name,cuisines,avgRating,costForTwo} = resData.info;
    return (
        <div className="border w-60 mt-4 mx-[3px] shadow-lg rounded-lg bg-white hover:shadow-xl">
            <img className="h-52 w-[90%] object-cover mx-[5%] mt-2 rounded-lg border shadow-md hover:shadow-lg" src={CARD_URL + cloudinaryImageId} />
            
            <div className="h-40 w-[90%] px-[5%] flex flex-col justify-evenly pt-2 overflow-hidden">
                <h3 className="text-base font-bold flex flex-wrap">{name}</h3>
                <h4 className="text-xs flex flex-wrap">{cuisines.join(" , ")}</h4>
                <h4>{avgRating}</h4>
                <h4>{costForTwo}</h4>
            </div>
        </div>
    )
}


//higher order component
export const betSellerLevel = (RestrauntCard) => {
    return (props) => {
        return (<div className="">
            <label className="absolute bg-black text-white p-1 rounded-br-2xl">BestSeller</label>
            <RestrauntCard {...props} />
        </div>)
    }
}



export default RestrauntCard;