import { useEffect,useState } from "react";
import { MENU_URL1 } from "../utils/constants";
import { MENU_URL2 } from "../utils/constants";
const useRestaurantmenu = (resid) => {
  const [resinfo, setresinfo] = useState(null);


    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async () => {
const data= await fetch(MENU_URL1+resid+MENU_URL2)
const json = await data.json();
console.log(json);
setresinfo(json.data);
    }

  return resinfo;
};
export default useRestaurantmenu;
