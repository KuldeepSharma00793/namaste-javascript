-Package.json is a configuration for NPM and it will note all the dependencies such as version author any specific package and information about that package in this file.

parcel : ^2.8.3 (carrot means there can be a minor version upgradable to like 2.8.4)
~2.8.3 means it can be a major incrementing upgrade from 2.8.3 to 3.5.1.
package.json can also have the exact version as well.

-package-lock.json - keeps the track of exact version of all the dependency which is installed. whereas in package.json the carrot sign is there before parcle : ^2.3.8 so it can be upgraded to 2.3.9 as well.


- node_modules is the core of all the dependency.kind of db where all the packages stored. we should always avoid it to push it to github.

- we should always include package-lock.json and package.json to github.


- but we have only installed the npm install -D parcel but in node_modules folder many other dependencies are also there with parcel so basically parcel as a project has it's own dependencies, and those dependencies can have their own dependencies this is known as transitive dependencies.
So when we installed the parcel we ask the npm to install other dependencies as well that parcel needs babel also, parcel need browserslist dependency also.




Why need ?
pacakges or dependencies are same.

-Bundlers are the files packed to together for given to production. some bundlers are webback, parcel, veet etc.

-we will be using parcel for creating bundleres.
- To install parcel "npm install -D parcel"

There are two types of two types of dependency :-
1. Normal Dependency - can be used in production also.
2. Dev 	Dependency - generally requirement in development phase.







