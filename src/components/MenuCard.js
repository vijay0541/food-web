import { MENU_URL } from "../utils/constants";
import CategoryCard from "./CategoryCard";
import { useState } from "react";

const MenuCard = ({menuCard, showItems, setShowIndex, hideIndex, setHideIndex}) => {
    // console.log(menuCard);

    const itemCards = menuCard.itemCards;
    // console.log(itemCards);

    const showItemMenu = () => {
        setShowIndex();
        setHideIndex();
    }

    return (
        <div className="flex justify-center">
            {/* Header */}
            <div className="w-6/12 mb-4 p-2 border-b-4">

                <div className="flex justify-between cursor-pointer mb-2 text-xl font-bold" onClick={showItemMenu}>
                <span>{menuCard.title} ({menuCard.itemCards.length})</span>
                {(!showItems || !hideIndex) && <span className="">⬇️</span>}
                {(showItems && hideIndex) && <span className="">⬆️</span>}
                </div>

                {(showItems && hideIndex) && <div>
                    {menuCard?.itemCards?.map((card) => <CategoryCard key={card?.card?.info?.id} cardInfo={card?.card?.info} />)}
                </div>}
            </div>
        </div>
    )
}

export default MenuCard;