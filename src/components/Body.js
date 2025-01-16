import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Schimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
 
// const Body = () => {
//   // Local State Variable - Super powerful variable
//   const [listOfRestaurants, setListOfRestraunt] = useState(resList);
//   useEffect(() => {
//     fetchData();
//   }, []);
//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8649473&lng=77.538296&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );
//     const json = await data.json();
//     console.log(json);
//     console.log(
//       json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//     setListOfRestraunt(
//       json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//   };

//   return (
//     <div className="body">
//       <div className="filter">
//         <button
//           className="filter-btn"
//           onClick={() => {
//             const filteredList = listOfRestaurants.filter(
//               (res) => res.info.avgRating > 4
//             );
//             setListOfRestraunt(filteredList);
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//       </div>
//       <div className="res-container">
//         {listOfRestaurants.map((restaurant) => (
//           <RestaurantCard key={restaurant.info.id} resData={restaurant} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const Body = () => {
//   const [listOfRestaurants, setListOfRestraunt] = useState(resList);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8649473&lng=77.538296&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );
//     const json = await data.json();
//     setListOfRestraunt(
//       json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//   };

//   return (
//     <div className="body">
//       <div className="filter">
//         <button
//           className="filter-btn"
//           onClick={() => {
//             const filteredList = listOfRestaurants.filter(
//               (res) => res.info.avgRating > 4
//             );
//             setListOfRestraunt(filteredList);
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//       </div>
//       <div className="res-container">
//         {listOfRestaurants?.map((restaurant) => (
//           <RestaurantCard
//             key={restaurant?.info?.id}
//             resData={restaurant}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const Body = () => {
//   const [listOfRestaurants, setListOfRestraunt] = useState([]);
//   const [filteredRestaurant, setFilteredRestaurant] = useState([]);

//   const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8649473&lng=77.538296&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );
//     const json = await data.json();
//     console.log(json)
//     const restaurants =
//       json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
//         ?.restaurants;
//     // console.log(restaurants);
//     // Filter out any restaurants that don't have a valid ID
//     const validRestaurants = restaurants?.filter(
//       (restaurant) => restaurant?.info?.id
//     );
//     setListOfRestraunt(validRestaurants);
//   };
//   console.log("hii");

//   return listOfRestaurants.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <div className="body">
//       <div className="filter">
//         <div className="search">
//           <input
//             type="text"
//             className="search-box"
//             value={searchText}
//             onChange={(e) => {
//               setSearchText(e.target.value);
//             }}
//           />
//           <button
//             onClick={() => {
//               // Filter the restraunt cards and update the UI
//               // searchText
//               //   console.log(searchText);

//               const filteredRestaurant = listOfRestaurants.filter((res) =>
//                 res.info.name.toLowerCase().includes(searchText.toLowerCase())
//               );

//                  setListOfRestraunt(filteredRestaurant);
//               // console.log(searchText);
//             }}
//           >
//             Search
//           </button>
//         </div>

//         <button
//           className="filter-btn"
//           onClick={() => {
//             const filteredList = listOfRestaurants?.filter(
//               (res) => res.info.avgRating > 4.4
//             );
//             setListOfRestraunt(filteredList);
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//       </div>
//       <div className="res-container">
//         {listOfRestaurants?.map((restaurant) =>
//           restaurant?.info?.id ? ( // Only render if we have a valid ID
//             <RestaurantCard key={restaurant.info.id} resData={restaurant} />
//           ) : null
//         )}
//       </div>
//     </div>
//   );
// };

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8649473&lng=77.538296&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // Safely access the restaurants data with fallback to an empty array
    const restaurants =
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    // Filter out invalid restaurants (e.g., those without an `id`)
    const validRestaurants = restaurants.filter(
      (restaurant) => restaurant?.info?.id
    );

    // Update the state with valid restaurants
    setListOfRestraunt(validRestaurants);
  };

  const onlinestatus= useOnlineStatus();
  if (onlinestatus===false) {
    return(
      <h1>u r off</h1>
    )
  }




  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search m-3 p-3">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
          className="px-4 bg-orange-50 mx-1 py-1.5 rounded-lg"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfRestraunt(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-3 p-3 flex items-center">
        <button
          className="filter-btn px-4 py-3 bg-red-100 m-4 rounded-md"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>

      </div>
      <div className="res-container flex flex-wrap">
        {listOfRestaurants.map((restaurant) =>
          restaurant?.info?.id ? (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Body;
