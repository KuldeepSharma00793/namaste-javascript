import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = ()=>(
<h1 className="head">
    Namaste React elemement
    </h1>
);


const number = 10000;

// React Functional Component - A Function which is returning piece of jsx 
const HeadingComponent = ()=>(
    <div id="container">
        <h2>{number}</h2>  
        <h3>{Title()}</h3>
        <Title />
        <Title></Title>
        {/* we can inject any js code inside { } and integrate it into a html like above line */}
    
    <h1>Namaste React Functional Component</h1>
</div>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);


// The above scenario composing one component into other is component composition. 





















