# Let's Explore the World

# Ep 06 Part 1
- Monolith Artchitecture and Microservices

# Mircroservices, small services combined together forms a big app, and they talk to each other depending on the usecase.

# For each work independently and talk to each other efficiently, i.e. seperation of concerns. and it follows a single responsibility priniciple.

# Episode 6 Part 2:

# Till current we have fetched the data fromt he dummy API data which we have taken from zomato website, now we will dyanmically fetch the data from the API on fly not from the Hardcoded data from the mockData.js file.


# How Web Apps fetch the data from the backend - 2 approaches :
-1. Onload of the page we call the api, and lets say that api takes 500ms times to fetch the data and then we render the UI. In this approach the UI has to wait for the 500ms which API is taking which is not optimistic approach.

-2.Onload of the page we will render the UI whatever we have, just like rendering only the skelton or layout, then api will be called then we re-render the UI with the data, and we will be using the second approach. As re-rendering the UI is very fast in React, it will give us the better user experience no matter how much times we re-render our components.

# Lets call the second approach in our food app.

# and we will be using the useEffect() hook, useEffect take two arguments, one is callback functin we have used arrow function, and second is the dependency list of arrays. the useeffect will be called once the body of the body component is loaded then it will be called.

# hook is nothing but a normal javascript function which react gives us, it has its own usecase.

# useState() hook is used to update the UI layer, it's a state variable whenever there is any change in the data using the efficient updating the DOM.

# Both useState() and useEffect() will be imported as named imports
- import {useEffect, useState} from 'react';

# useState() variable will always be received inside array, and default value will be stored in arguments of useState();
const [listOfRestaurants] = useState([]); // here empty values are default values for listOfRestaurants.

let listofRestaurants = [];


# useEffect will take two arguments below arrow function and dependency array :
- useEffect(()=>{

}, []);

# useEffect() The body content will be rendered and then useEffect will be called, if you want to do something after rendering the component then we have to use the useEffect()


# Conditional rendering

if(listOfRestaurants.length === 0){
  return <Shimmer />;
}

# Why do we need useState() variable, Dive deep into state variables


#     const [btnNameReact, setBtnNameReact] = useState("Login");
# whenever the state varialbe i.e. btnNameReact will change using the funciton  setBtnNameReact, react will re-render the component and refresh the whole component again very fast cause we have only updated the button but it will re-render the whole component again with updated values and all updated value will be there. it triggers the reconcilation algorithm cycle.


# Episode 6 Par 6

# Here we will create search functionality in our food app, 

# Whenever you change the local state variable i.e. using the useState, react will re-render the component.

# Whenever state varialbes update, react triggers a reconciliatin alogrith i.e. react fibre algorithm (re-render the component whole component but it only updating the input value inside the DOM, DOM manipulation is expensive but react is doing it very efficiently). it finding the difference between two virtual dom using the diff algorithm and thus input box is updating the  value in the developer tools.  















