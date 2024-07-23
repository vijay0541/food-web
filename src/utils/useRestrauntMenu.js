import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestrauntMenu = (resId) => {
    //state variable
    const [resInfo, setResInfo] = useState(null);

    //fetch data from API
    useEffect(()=> {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        //fetch data
        const data = await fetch(MENU_URL + resId);

        //convert data to json
        const json = await data.json();

        //store the json into local state variable
        setResInfo(json?.data);
    }

    //return the variable
    return resInfo;
}

export default useRestrauntMenu;