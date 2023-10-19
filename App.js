import React from 'react';
import ReactDOM from 'react-dom/client';


/*
* Header Component
*   -Logo item
*   -Nav Items
* Body Component
*    - Search component
*    - Restaurants Container
*       - Restuarants Cards
*           - img, name of res, star rating, cuisines, delivery time etc
* Footer Component
*   - Copyright
*  - Links
*   - Address 
*   -Contact
*/

const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://png.pngtree.com/png-clipart/20230106/original/pngtree-simple-and-modern-food-logo-vector-design-png-image_8876455.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};


// styles are given as object in react

// const styleCard = {
//     backgroundColor: "#f0f0f0"
// } 


const RestaurantCard = (props)=>{
    const {resData} = props;
    const {name, Cuisines, costForTwo, avgRating} = resData?.data;
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <h3>{name}</h3>
            <h3>{Cuisines.join(",")}</h3>
            <h3>{costForTwo /10}</h3>
            <h3>{avgRating}</h3>
        </div>
    );
};

const resList = [
    {
       data:
       { 
        name : "KFC",
        id : 1,
        Cuisines : ["Burgers", "Biryani", "American"],
        costForTwo: 4000,
        avgRating: "3.8"
    }
    },
    {
        data: {
        name : "KHana Khajana",
        id : 2,
        Cuisines : ["North Indian", "south indian", "American"],
        costForTwo: 5000,
        avgRating: "4.8"
        }
    },
    {
        data : {
        name : "KFC",
        id : 3,
        Cuisines : ["south", "italian", "continental"],
        costForTwo: 6000,
        avgRating: "4.5"
    }},
    {
        data: {
        name : "China Town",
        id : 4,
        Cuisines : ["Burgers", "chowmein", "dosa"],
        costForTwo: 3000,
        avgRating: "4.8"
    }}
];



const Body = ()=>{
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">

               { resList.map((x)=> {
               return <RestaurantCard key={x.data.id} resData={x} />;
                })
            }
            </div>
        </div>
    );
};


const AppLayout = ()=>{
    return( 
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);

















