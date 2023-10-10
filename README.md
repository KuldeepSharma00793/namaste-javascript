#Namaste React course Episode 1
#Namaste React course Episode 2

<!-- Lecture Two lets ignite our app -->

#Parcel host your app to the local server and refreshing the page automatically i.e.
- HMR = Hot module replacement
- Parcel uses a file watching algorithm - written in c++ it keeps an eye on every file.
- Parcel do caching - Faster builds while running
- Parcel will do image optimization as well (it's a most expensive operation a browser can do)
- Minification of file
- bundling
- compress
- Consistence hashing
- Code splitting
- differencial bundling (gives support for older browsers or any browsers)
- Diagnostic - giving you better error in console and terminal 
- Error Handling
- Gives HTTPS support as well
- Tree shaking algorithm - (remove unsed code for you such as you have 10 functions and you are using only 3 in the app, so parcel will remove unnecessary unsed function while running)
- different dev and prod bundles - 


#Command : npx parcel index.html (it hosted the index.html on localhost:1234)

#To execure any package we write : npx when installing we write npm.

#now we will remove the cdn and install the react package with command npm install react ( we didn't included the -D as we need react as normal dependency)


#Lets also install react dom package as well in our node_modules folder - npm install react-dom

#why react app is faster ?
- its not only about react it also about the other libraries such as parcel which makes our react app perform faster and give us the smooth experience.

#for making our react app compatible with older browser versions
- we will be using the browser lists inside the node_modules folder








