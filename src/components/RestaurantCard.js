const RestaurantCard = (props)=>{
    const {name, cuisines, costForTwo, avgRating, locality, cloudinaryImageId} =props?.resData;

    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="imageName" />
            <h3>{name}</h3>
            <h3>{cuisines.join(",")}</h3>
            <h3>{costForTwo}</h3>
            <h3>{avgRating}</h3>
            <h3>{locality}</h3>
        </div>
    );
};
export default RestaurantCard;
