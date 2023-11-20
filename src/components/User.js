import {useState} from 'react';

const User = ({name, title})=>{
    const [count] = useState(0);
    const [count2] = useState(2);

    useEffect(()=>{
        //API CAlls
    },[]);
    
    return (
        <div className="user-card">
            <h3>Count : {count}</h3>
            <h3>Count : {count2}</h3>
            <h2>Name: {name}</h2>
            <h2>Title: {title}</h2>
            <h3>Location: Dehradun</h3>
            <h4>Contact: @aksaymarch7</h4>
        </div>
    );
};

export default User;