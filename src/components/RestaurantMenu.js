import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = ()=>{
    
const {resId} = useParams();

const [resInfo, setResInfo] = useState(null);


useEffect(()=>{
    fetchMenu();   
},[]);


const fetchMenu = async ()=>{
    const data = await fetch(MENU_API+resId);
    const json = await data.json();
     setResInfo(json);
     console.log(json);
};

if(resInfo === null || resInfo == undefined) return <Shimmer />;


const {name, cuisines, costForTwo} = resInfo?.data?.cards[0]?.card?.card?.info;

const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
console.log(itemCards);

// const {itemCardsNew} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories[0].itemCards;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines} - {costForTwo/100}</p>
            <h2>Menu</h2>   
            <ul>
                {itemCards.map((item)=> <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100}/-</li>)}
            </ul>

            {/* <ul>
            {resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories[0].itemCards.map((item)=> <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100}/-</li>)}
            </ul>
                <ul>
                {resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories[1].itemCards.map((item)=> <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100}/-</li>)}
            </ul> */}
        </div>
        
    );
};

export default RestaurantMenu;