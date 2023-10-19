# Talk is cheap show me the code
# we will write actual code today


# We have created a Food ordering app below are the some learnings :



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



- Props which are objects are basically the Arguments passed in the function component.

- Eg : <Restaurant resName="abc" cuisine="north india" />


- it will be passed to the function component as props.

- When you pass dynamic data to a component, you pass in as Props.

- const RestaurantCard = (props)=>{
    console.log(props);
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img
            className="res-logo" src={props.src} alt="res-logo" />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.rating}</h4>
            <h4>{props.time}</h4>
        </div>
    );
};


- Some shortcuts for above code would be to directly destructuring on fly the prop which we are passing as argument to functional components.

- const RestaurantCard = ({resName, cuisine, rating, src, time})=>{
    console.log();
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img
            className="res-logo" src={src} alt="res-logo" />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>{time}</h4>
        </div>
    );
};

<!-- Or below is also same -->

- const RestaurantCard = (props)=>{
    const {resName, cuisine, rating, src, time} = props;
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img
            className="res-logo" src={src} alt="res-logo" />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>{time}</h4>
        </div>
    );
};


// styles are given as object in react

// const styleCard = {
//     backgroundColor: "#f0f0f0"
// } 




# Config Driven UI (Important topic)

- Suppose there is a carousel, and caruousel can have different data for delhi, mumbai etc in food app. suppose we have different offers in delhi and mumbai and karnatka etc so we handle the UI using the config Driven UI.

- Whenver  loopoing over anything here we will be using only the map, filter and reduce not for loops etc

- and we always have to give the key={} keyword whenever looping else it will give an warning in the console.

-               { resList.map((x)=> {
               return <RestaurantCard key={x.data.id} resData={x} />;
                })
            }
- AS key={} will uniquely identify all the restaurant cards and whenever any new card will come react will only render the added one else if we don't write key={} react will re-render all the restaurant cards again with the newly created card. and also react will give you warning in console.

- Also react says never use indexs in map, always write key={} which should come from the api or the database. (it's not recommended to use indexes when using map in key={index}) 