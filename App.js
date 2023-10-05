import React from 'react';
import ReactDOM from 'react-dom/client';
/** 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 Tag</h1>
 *          <h2>I'm h2 Tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm h1 Tag</h1>
 *          <h2>I'm h2 Tag</h2>
 *      </div>
 * </div>
 * 
 * To create siblings we have to wrap the childs inside the arrays and it will be said as arrays object
 */

// Lets create Nested React element 

const parent = React.createElement(
    'div',
    {id:"parent"},[
     React.createElement('div',
     {id:"child"},[
        React.createElement('h1',{}, "I'm h1 tag"),
        React.createElement('h2',{}, "I'm h2 tag")
    ]
    ),
    React.createElement('div',
    {id:"child2"},[
       React.createElement('h1',{}, "I'm h1 tag"),
       React.createElement('h2',{}, "I'm h2 tag")
   ]
   )]
);

// The above code is very untidy and complex to write as we have only two nested elements right now but what when we have many more nested elements ?

// So the solution for this is to JSX. It will make our life easy when we make our tag. we will not longer be using the React.craeteElement its basically the core of react.
// We will be writing the latest JSX version of the code.



const rootme = ReactDOM.createRoot(document.getElementById("rootme"));
rootme.render(parent); // converts the object to HTML element then renders it
console.log(parent); // this object is a ReactElement(object) => HTML(Browser understands)l







// Lets add some heading in root div

const heading = React.createElement(
    'h1', 
    {id:"heading", xyz: "abc"},
     "Hello world from React!"
     );
// first i need to create a root and tell where to inject the above created element.
console.log(heading); // this will be an object react will return us the object not the html element 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading); // the render method will take argument as object as heading in this case. render method will converting the object and putting it to root element and replace the HTML element with the added element
