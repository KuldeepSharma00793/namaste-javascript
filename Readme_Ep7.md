# Episode 7 Finding the path

# Part -1

-If no dependency array is given as it's a optional argument in useEffect=> useEffect is called  on every render of the compoenent.

- if the dependecy array is empty [] => useEffect is called on only initial render only once.

- if the dependency array is [btnNameReact] => called every time btnNameReact is updated. 

Eg: useEffect (()=>{

}, []);



# Part - 02
# Few more things about useState hooks

-Never create the useState outside of the component, it can only be called inside the component.

- Never create the state variable inside the if else or any other condtion, for loops, inside functions dont create in any codntions its meant to be created first thing in the component creation.




# Part - 03

# Routing of the food application

# For routing we have to use the npm library i.e. react-router-dom

-Whenver we have to create the routing we have to write the routing configuration in the app.js


# When react router dom is accessing the page which is not created it will throw a error 404 error on page, we will create our new error page for it.


# React router dom gives us the access for one important hook i.e. function, i.e. useRouteError.

-We can give more information about the error using the useRouteError hook provided by the react-router-dom. 
- Whenver anything starting from use in intial word i.e it's a hook such as useState, useEffect, useRouteError.


# Part -04

# Now we will be making the about us page to load with the header we don't want our app to loose the header component and then load any other page, so we'll be using the "children routes".


# Step1 :
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'; 

# CreatebrowserRouter and RouterProvider are both named components written inside react-router-dom.


# The appRouter is defined as we have to provide some configuration for the router so we will use the createBrowserRouter and it takes array of objects like below, then we have to give the router configuration to RouterProvider component, it will actually provide this routing configuration to our app.

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        children : [
            {
                path : "/",
                element : <Body />
            },
            {
                path : "/about",
                element : <About />
            },
            {
                path : "/contact",
                element : <Contactus />
            }
        ],
        errorElement : <Error />
    },
    
]);

# Then  we will provide the whole configuration to the app via.

root.render(<RouterProvider router={appRouter} />);


# React-router-dom also creates error page for us.
# we will be using the useRouteError hook to give more infor when any error occurs in the page. it will return us the object and we can carry out values from that object and then map them to the HTML so that we can effectively handle the error appropriately.



# Children routes so that only header remains intact and only body changes when swting the pages.


# We have to create children : [] in the app confiuration to make it.
const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        children : [
            {
                path : "/",
                element : <Body />,
                errorElement : <Error />
            },
            {
                path : "/about",
                element : <About />
            },
            {
                path : "/contact",
                element : <Contactus />
            },
            {
                path : "/restaurants/:resId",
                element : <RestaurantMenu />
            }
        ],
        errorElement : <Error />
    },
    
]);


# we will be using the outlet to load a different page with the header intact in it's own position.

import Outlet from './outlet';

const AppLayout = ()=>{
    return( 
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
};


# Now we will link our button to click on it and redirect to corresponding page such as /about for about button but you should  never use the <a></a> tag in the react as Anchor tag will refresh the whole page and we can handle it correctly by without refreshing the whole page.



# Solution is  use the <Link> named component from react-router-dom to link the links in the react page. It works as a anchor tag.

<li><Link to="/">Home</Link></li>


# We have implemented client side routing, as  all the code with all of us alreay in the app. such as about us, contact us etc.


# Two types of routin gin web page  :
- Client side routing - We already has code for aboutus, contact page with us so whenever the react app  first loaded into the browser it has all the components as well i.e. client side routing. That's why react is most used for single page application.(SPAs) as it's very fast.

- Server side routing - When you are making a network call, such as when you are fetching an api you are actually making a network call.



# Part -05

# Lets learn dynamic Routing in the food application.

  path : "/restaurants/:resId",

  here :resID will be dynamic.

- If i click on any restaurant the URL is something 
www.swiggy.com/restaurants/kfc- 
www.swiggy.com/restaurants/khana-khajana-moti-mehal

# GraphQL solve problem of fetching the data which we want from the long API, it deals with overfetching, it loads only data which requires in the app.

const {itemCards} = resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info;

# Whenever using the map function always use the key.

# Use params for dynamic binding of the page url.





 










