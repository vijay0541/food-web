import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";

const RestrauntMenu = () => {
    const [restroMenu, setRestroMenu] = useState(null);

    //MenuCard component will be controlled by index.
    const [showIndex, setShowIndex] = useState(null);
    //To hide component
    const [hideIndex, setHideIndex] = useState(false);
    
    const resId = useParams().resId;

    useEffect(()=> {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const listMenu = await fetch(MENU_URL + resId);

        const json = await listMenu.json();
        // console.log(json);

        setRestroMenu(json?.data);
    }

    if(restroMenu === null)
    {
        return <Shimmer />
    }

    // console.log(restroMenu);

    const filteredRestroMenu = restroMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((restraunt) => restraunt?.card?.card?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
        <div className="flex flex-col">

            <div className="">
                <div className="border rounded-md shadow-lg bg-gradient-to-r from-green-200 via-pink-300 to-blue-200 text-center text-4xl font-bold mt-2 mb-4 mx-[25%] py-2">{restroMenu?.cards[0]?.card?.card?.text}</div>

                <div className="border rounded-lg shadow-md bg-gradient-to-r from-green-200 via-red-200 to-blue-200 text-center text-2xl font-semibold mb-4 mx-[25%]">{restroMenu?.cards[2]?.card?.card?.info?.costForTwoMessage}</div>
            </div>

            {/* controlled component */}
            {filteredRestroMenu.map((menuCard,index) => <MenuCard menuCard={menuCard?.card?.card} key={menuCard?.card?.card?.title} showItems={(index === showIndex) ? true : false} setShowIndex={() => setShowIndex(index)} hideIndex={hideIndex} setHideIndex={() => setHideIndex((index === showIndex) ? !hideIndex : true)}/>)}
        </div>
    )
}

export default RestrauntMenu;