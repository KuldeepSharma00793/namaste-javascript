import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = ()=>{
//Local State Variable - Super powerful variable i.e. state variable useSTate
const [listOfRestaurants, setListOfRestaurant] = useState([]);
const [filteredRestaurants, setFilteredRestaurant] = useState([]);
const [searchText, setSearchText] = useState("");

console.log('Body Render');

useEffect(()=>{
  fetchData();
}, []);


const fetchData = async ()=>{
  const dataAPI = await fetch("https://kuldeepsharma00793.github.io/restaurantListApi/restaurantsList.json");  
  const json = await dataAPI.json();
  setListOfRestaurant(json);
  setFilteredRestaurant(json);
}; 

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
            <div className="search" style={{margin:"10px"}}>
            <input type="text" className="search-box" value={searchText} onChange={(e)=>{
              setSearchText(e.target.value);
            }}/>
            <button onClick={()=>{
              const filterRestaurants=listOfRestaurants.filter((restaurant)=>
                  restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
                );
                console.log(filterRestaurants);
                setFilteredRestaurant(filterRestaurants);
            }}>Search</button>
          </div>

                <button className="filter-btn" onClick={()=>{
                  const filteredList = listOfRestaurants.filter((res)=> 
                    {return res.data.avgRating >= 4}
                    ); 
                    setListOfRestaurant(filteredList);
                  console.log(listOfRestaurants);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant)=> {
                                return <RestaurantCard key={restaurant.data.id} resData={restaurant} />;
                                 })
               }
            </div>
        </div>
    );
};
export default Body;