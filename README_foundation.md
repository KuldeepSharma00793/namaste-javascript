<!-- Lecture Three Laying the Foundation -->

#npx parcel index.html - this will create a development build on to localhost:1234

-Lets create a npm script that will run the program instead to the above command inside the package.json under the "script" name

- we need to create a script in package.json then it will be known as the npm library
 - it's a industry standard, if you go to new project find the package.json and see for script you will get the idea how to start it.

-"scripts": {
    "start" : "parcel index.html",
    "build" : "parcel build index.html",
    "test": "jest"
  },


- then our script is ready just type "npm run start" or shortcut "npm start" and hit enter it will run the same way.

- and if you only want to build the project we can use the same npm script via "npm run build" shortcut won't work here.



#Lets start coding the fundamentals


// React Element are equivalent to DOM elements
// React elements defined as they are objects which are when rendered to a DOM becomes an HTML element, react has merged the HTML and js into one
// below is core react ulitmately the JSx will be converted to React elements



// React.createElement => ReactElement-JS Object => HTMLElement(render)



const heading = React.createElement(
    'h1',
    {id: "heading"},
     "Namaste React 🧨"
     );
// here heading is an object you can do console for it

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);


// The solution for above problem just to create a h1 element we have to write so  much code i.e. JSX javascript synatx

// JSX javascript syntax to create react element, jsx is not a part of react. but JSX makes developers life easy to write the code. (here we will be merging the HTML element with javascript) it is not HTML inside Javascript, its HTML like syntax


// JSX = HTML-like or XML-like syntax to create react element it's not HTML inside JavaScript and <h1>Namaste React using JSX</h1>; this is jsx and jsxHeading is React element.


// browser's JS engine can't understand the below jsx code then how it's working inside the browser, Parcel is doing it behind the scenes, this code is transpiled(converting) before it's reaches to javascript engine

// JSX gives the code to Parcel and then parcel will hand over the responsibilities to BABEL so babel converted the code so that react will undertstand it. Babel is transpiling our code. Babel is a javascript compiler or translpiler.



// JSX =>React.CreateElement => React-JS Object => HTMLElement(render);
// Babel is converting the JSX to React.CreateElement
// Babel responsibility is to compile the jsx to react code.

const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;




// JSX =>React.CreateElement => React-JS Object => HTMLElement(render);
// Babel is converting the JSX to React.CreateElement
// Babel responsibility is to compile the jsx to react code.

// React Element
const jsxHeading = <h1 className="head">Namaste React using JSX</h1>;
// writing the above code in multiple lines needs to wrap the code inside the curly brackets it's mandator in multiple lines not in single lines
const jxsHeading2 = (<h1 className="head">
    Namastre React
    </h1>
);



# React Component two types
// Class Based Component - Old Way of writing Code
// Functional Components - New Way of writing Code


<!-- This is react element as it's name starts with small letter, and the arrow function or anonymous function is missing here thats why it's a react element -->
const jxsHeading = (<h1 className="head">
    Namastre React
    </h1>
);



<!-- below is the React Functional component as we have the name starting with capital i.e. HeadingComponent and we have arrow function attached to it -->
// React Functional Component - A Function which is returning piece of jsx 
const HeadingComponent = ()=>{
    return <h1>Namaste React Functional Component</h1>;
};

<!-- Way of rendering component -->
root.render(<HeadingComponent/>);

<!-- Way of rendering react element -->
root.render(jsxHeading);







<!-- component composition -->
import React from 'react';
import ReactDOM from 'react-dom/client';

const Title =()=> (
<h1 className="head">
    Namastre React
    </h1>
);


// React Functional Component - A Function which is returning piece of jsx 
const HeadingComponent = ()=>(
    <div id="container">
    <Title />
    <h1>Namaste React Functional Component</h1>
</div>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);


// The above scenario composing one component into other is component composition.






<!-- When you write { data } this data cannot have bad data as jsx will sanitize the data before rendering it on the browser such as if any api have malicious code and you execute it in your app by {data} so jsx will take care of the malicious code and sanitize the result -->

const title = (
<h1 className="head">
    {elem}
    Namaste React elemement
    </h1>
);


