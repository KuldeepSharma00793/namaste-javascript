import RestaurantCard from './RestaurantCard';
import { useState } from "react";
import resList from '../utils/mockData';
const Body = ()=>{

//Local State Variable - Super powerful variable i.e. state variable
let [listOfRestaurants, setListOfRestaurant] = useState(resList);


 // NOrmal variable creation
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                  const filteredList = listOfRestaurants.filter((res)=> 
                    {return res.data.avgRating >= 4}
                    ); 
                    setListOfRestaurant(filteredList);
                  console.log(listOfRestaurants);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">

               {listOfRestaurants.map((restaurant)=> {
               return <RestaurantCard key={restaurant.data.id} resData={restaurant} />;
                })
            }
            </div>
        </div>
    );
};
export default Body;