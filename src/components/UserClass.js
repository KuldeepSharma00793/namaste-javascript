import React from 'react';

class UserClass extends React.Component{
    constructor(props){
        super(props);     
        this.state = {
            userInfo : {
                name : "dummynaem",
                location : "default",       
                avatar_url : "abc.com/user/avatar"
            }
        };
        
    }



    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        this.setState({
            userInfo : json, 
        });
    }

    componentDidUpdate(){
        console.log("Component did updated called");
    }
    componentWillUnmount(){
        console.log("Component is unmounting called");
    }


    render(){
        const {name, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card"> 
            <img src={avatar_url} style={{width: 200}} alt="" />
            <h3>Name: {name}</h3>
            <h3>Location: {location}</h3>
            <h4>Contact: 9654502599</h4>
        </div>
        )
        
    }
}

export default UserClass;