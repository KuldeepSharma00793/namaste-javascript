import UserClass from './UserClass';
import {Component} from 'react';

class About extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log('Parent componentDidMount');
    }
    render(){

        return (
            <div>
                <h2>About Class Component</h2>
                <h2>This is Namaste React Webserires</h2>
                <UserClass name={"Kuldeep Sharma (Class)"} title={"React Pro Kuldeep"} designation="consultant" />
            </div>
        );
    };
};

export default About;




// const About = ()=>{
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Webserires</h2>
//             {/* <User name={"Akahsy Saini (function)"} title={"mytitle"}/> */}
//             <UserClass name={"Kuldeep Sharma (Class)"} title={"React Pro Kuldeep"} designation="consultant" />
//         </div>
//     );
// };

