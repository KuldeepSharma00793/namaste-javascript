Episode 8 Part-1

Lets get Classy

# we will be learning class based component in this episode :

-It is the older way of creating components, new way is functional componets which we have done.

-They are important to know, it got asked in interview cause companies are working in class based components.

# The use of super(props) in the class component is this that it basically allow accessing this.props in the constructor function. In fact what the super() function does is, calls the constructor of the parent class.

# Super(props) will lets us access the methods defined in the parent class here it's React.Component and we have to use the super() keyword, then only this keyword will work in props.

 

 # Episode 8 Part-2

 # When we call the functional component we basically loading the functional component on screen and loading that component with data.

 # When we load the class based component we are actaully creating a instance of the class and giving props to constructor and super.


 # Creating the state variable in the class bassed component cause earlier there were no hooks and functional components so below is the way of defining state in the class based component.


class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            count2 : 2,
        };
        console.log(props);
    }
    render(){
        const {name, title, designation} = this.props;
        const {count, count2} = this.state;
        
        return (
            <div className="user-card">
            <h3>Count : {count}</h3>
            <h3>Count2 : {count2}</h3>


# In class based component we can create multiple state varialbe inside the thi.state as objects as state is a big object.

       this.state = {
            count : 0,
            count2 : 2,
        };


# In functional component we :

    const [count] = useState(0);
    const [count2] = useState(2);


# So behind the scene the functional component is stored as part of big object this.state.

# Episode 8 Part-3 : lets update the class based state variables this.state.

So In the functiona based component we use the callback function to update the state varialbes.

Lets see what we do in class based component :

# Never update the this.count state varialbe like below :
            <button onClick={()=>{
                this.state.count = this.state.count + 1;
            }
            }>Count Increase</button>

# The above is wrong way to increase the count in the class based component. In functional based component we use callback function to update the values of the state variable.

# So react gives us the this.setState function to update the value of the state variablea and it can be used anywhere in the class.

this.setState({
                    count : this.state.count + 1,
                });  

# This.setState takes an object then using that object we will  update the value of the state variable in the class component.

# there's another class based component i.e. componnetDidMount() which is used to make API calls, it is similar to useEffect() as useEffect is called when the render is complete then it get's called similiarly we use the componnentDidMount() so that we can first render the application and later on make an api call and fill the data,  and it will be called once the constructor() and then render() and then it will be called. that's how the component class cycle works.

# This is the life cylce of the parent child component.

Below is parent component :

import UserClass from './UserClass';
import {Component} from 'react';

class About extends Component{
    constructor(props){
        super(props);
        console.log('Parent constructor');
    }
    componentDidMount(){
        console.log('Parent componentDidMount');
    }
    render(){
        console.log('parent render');
        return (
            <div>
                <h1>About Class Component</h1>
                <h2>This is Namaste React Webserires</h2>
                <UserClass name={"Kuldeep Sharma (Class)"} title={"React Pro Kuldeep"} designation="consultant" />
            </div>
        );
    };
};

export default About;



Below is Child component :

import React from 'react';

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
        };
        console.log('child constructor');
        
    }

    componentDidMount(){
        console.log('child componentDidMount');
    }

    render(){
        console.log('child render');
        const {name, title, designation} = this.props;
        const {count} = this.state;
        
        return (
            <div className="user-card">
            <h3>Count : {count}</h3>
            
            <button onClick={()=>{
                // Never update state variables directly
                // this.state.count = this.state.count + 1;
                this.setState({
                    count : this.state.count + 1,
                });  
            }
            }>Count Increase</button>
            <h2>Name: {name}</h2>
            <h2>Title: {title}</h2>
            <h2>Designation: {designation}</h2>
            <h3>Location: Delhi</h3>
            <h4>Contact: 9654502599</h4>
        </div>
        )
    }
}

export default UserClass;




# Episode 8 Part-5
# Lets make API CAlls inside the class based component

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ - To understand the life cycle of React.

# updating the DOM is the most expensive operation, so what react does is it batches the render phase component together then at the end the commit phase it executes it when rendering the component. that is why react is fast.

# componentDidMount() when the component is mounted it will be called and componentDidUnmount() it will be called when the component is unmounted, and we switch the page to some other page.




