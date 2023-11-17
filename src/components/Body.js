import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

const Body = ()=>{
//Local State Variable - Super powerful variable i.e. state variable useSTate
const [listOfRestaurants, setListOfRestaurant] = useState([]);
const [filteredRestaurant, setFilteredRestaurant] = useState([]);
const [searchText, setSearchText] = useState("");
useEffect(()=>{
  fetchData();
},[]);


const fetchData = async ()=>{
  const dataAPI = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6269627&lng=77.2952983&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");  
  const json = await dataAPI.json();
  setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants);
  console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants);
  setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants);

}; 

if(listOfRestaurants.length === 0 || listOfRestaurants.length == undefined || listOfRestaurants.length == null) {
  return <Shimmer />;
}

    return (
        <div className="body">
            <div className="filter">
          <div className="search" style={{margin:"10px"}}>
          <input type="text" className='search-box' value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
            console.log('On change is called on every key press');
          }} />
          <button onClick={()=>{
            const filterSearch = listOfRestaurants.filter((res)=>{
              return res.info.name.toLowerCase().includes(searchText);
            });
            setFilteredRestaurant(filterSearch);
            console.log(searchText);
          }}>Search</button>
          </div>

                <button className="filter-btn" onClick={()=>{
                  const filteredList = listOfRestaurants.filter((res)=>{
                    return res.info.avgRating > 4
                  });
                  setFilteredRestaurant(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant)=> (
                                <Link key={restaurant.info.id} to={"restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant.info} /></Link>
                ))}
            </div>
        </div>
    );
};
export default Body;