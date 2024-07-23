import RestrauntCard,{betSellerLevel} from "./RestrauntCard";
import resObj from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

//body
const Body = () => {
  //static data.
  const [listOfRestraunt,setListOfRestraunt] = useState([]);
  //filtered data
  const [filteredRestraunt, setFilteredRestraunt] = useState([]);

  const [searchText, setSearchText] = useState("");

  //Calling Higher order component
  const BestSellingItem = betSellerLevel(RestrauntCard);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    //fetch data from API
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6448474&lng=77.24037729999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    //convert to json
    const json = await data.json();

    setListOfRestraunt(json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setFilteredRestraunt(json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  const onlineStatus = useOnlineStatus();

  if(onlineStatus == false){
    return <h1>offline !!</h1>
  }

  if(listOfRestraunt.length === 0)
  {
    return <Shimmer />
  }
  

    return (
        <div className="">

            <div className="flex justify-center my-5">
                <div className="flex">

                  <input className="border border-gray-400 p-2 mr-1" type="text" placeholder="Search Your Favourite Restro.." value={searchText} onChange={
                    (e) => {
                      setSearchText(e.target.value);
                    }} 
                  />

                  <button className="border border-gray-400 p-2 hover:border-gray-600 transition ease-out duration-500" onClick={() => {
                    //filter the restro card
                    console.log(searchText);

                    const filteredListOfRes = listOfRestraunt.filter(
                      (req) => req.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
                    )
                    setFilteredRestraunt(filteredListOfRes);

                  }}>Find</button>

                </div>

                <button className="border border-green-300 bg-green-100 rounded-xl ml-8 p-2" onClick={() => {
                  const filteredList = listOfRestraunt.filter(
                    (res) => res.info.avgRating > 4.3
                  );
                  setFilteredRestraunt(filteredList)
                }}>Best Sellers</button>

            </div>

            <div className="flex flex-wrap justify-evenly bg-gradient-to-br from-green-100 to-yellow-100">
            {
                filteredRestraunt.map((restro) => <Link to={"/restraunt/"+ restro.info.id} key={restro.info.id}>
                  {(restro.info.avgRating > 4.3) ?(<BestSellingItem resData={restro} />): (<RestrauntCard resData={restro} />)}
                </Link>)
            }
            </div>
        </div>
    )
}

export default Body;