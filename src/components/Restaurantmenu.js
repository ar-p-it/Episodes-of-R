import { useState, useEffect } from "react";
import Shimmer from "./Schimmer";
import { useParams } from "react-router";
import useRestaurantmenu from "../utils/useRestaurantmenu";
const RestaurantMenu = () => {
  // const [resinfo, setresinfo] = useState(null);

  const { resId } = useParams();
  const resinfo = useRestaurantmenu(resId);
  // console.log(resId);
//* Code should be single responsibility fxn ye part pahle do kaam krra tha jo ki data fetch krna aur display krna par customised hooks se humne fetch ko dusre part main daal diya
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     MENU_URL1+resId+MENU_URL2
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   setresinfo(json.data);
  // };

  if (resinfo === null) return <Shimmer />;
  //   const [name,cuisines]=resinfo?.cards[2]?.card?.card?.info

  const { itemCards } =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{resinfo?.cards[2]?.card?.card?.info?.name}</h1>
      <h3>
        {resinfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")} -{" "}
        {resinfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
      </h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
        {/* <li>{itemCards[0]?.card?.info?.name}</li> */}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
