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