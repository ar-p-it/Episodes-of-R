import { CDN_URL } from "../utils/constants";

// const RestaurantCard = (props) => {
//   const { resData } = props;

//   const {
//     cloudinaryImageId,
//     name,
//     avgRating,
//     cuisines,
//     costForTwo,
//     deliveryTime,
//   } = resData?.info;

//   return (
//     <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
//       <img
//         className="res-logo"
//         alt="res-logo"
//         src={CDN_URL + cloudinaryImageId}
//       />
//       <h3>{name}</h3>
//       <h4>{cuisines.join(", ")}</h4>
//       <h4>{avgRating} stars</h4>
//       <h4>₹{costForTwo / 100} FOR TWO</h4>
//       <h4>{deliveryTime} minutes</h4>
//     </div>
//   );
// };

const RestaurantCard = (props) => {
  const { resData } = props;

  if (!resData?.info) return null;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData.info;

  return (
    <div
      className="res-card m-4 p-4 w-[300px] bg-gray-100 hover:bg-gray-300 "
      //  style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
    </div>
  );
};
export default RestaurantCard;
