import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';



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
export default Body;