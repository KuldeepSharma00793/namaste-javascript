const RestaurantCard = (props)=>{
    const {resData} = props;
    const {name, Cuisines, costForTwo, avgRating, imgSrc} = resData?.data;
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img src={imgSrc} alt="imageName" />
            <h3>{name}</h3>
            <h3>{Cuisines.join(",")}</h3>
            <h3>{costForTwo /10}</h3>
            <h3>{avgRating}</h3>
        </div>
    );
};
export default RestaurantCard;