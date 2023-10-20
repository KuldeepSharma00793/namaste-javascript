# Episode -05 
# Lets get hooked

# The food app is config driven UI as we are configuring the API data in function components.
# We have written every code the API code, the component in single App.js file which is about 150 lines of code, and that's not a good practice to write the code in single file app.js

# Lets resctructure the app

-Always create seperate file for each component
-Never put your hardcorede data into component file such as URL is hardcoded coming from reslist api.
- Whole resList API is also hardcoded data which we don't have to keep it in component file.


# When in a single file you have to export or import multiple things you can do it with named export

# Two types of export/import

-one type of export is default export
Eg: export default funcitonName;
we can do export default only once in a single file.

- second type is named export
Eg: just write export befoer any constant or variable to export multiple things from same file  
To import it, wrap it inside curly braces while import :

- import {LOGO_URL} from '../utils/constants';

# Always create a new file for new component and try to keep almost 100 lines of code in one component
# if it's exceeding that then divide that component into two components.


# React is fast as it doesn the dom manipulation efficiently, it works well with UI and data layer together.


# Lets start using Hooks, so what is hooks
-what is functional component at the end of day ie. a normal javascript function.
- what is react element at the end of day, its a plain javascript object
-similarly a hook is a normal javascript function which is given to us by react.


# React Hooks
(Normal JS utility function which facebook developers wrote it, they have written it in react)
- Two very Important Hooks : 
    -useState() : it's a utility function and used to generate superpowerful state variables in react.
    -useEffect()

- # Whenever a state variables updates react re-render the components.

- # React uses Reconciliation alogrith which is also known as React fibre.

# Virtual DOM is a representation of actual DOM.

# Diff alogorithm is used to find the difference between previous virtual dom and current virtual dom.

React Fibre Architecture : 

https://github.com/acdlite/react-fiber-architecture



# Why react is fast ?
- it has efficient DOM manipulation, it has virtual DOM, it has diff algorithms, it can found out the difference and update it.
- it has reconciliation algorithm.
















