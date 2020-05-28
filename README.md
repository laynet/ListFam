# ListFam

Problem: An entire househould needs to maintain a grocery list while severa members of the household shop at the same time.
Solution: A grocery list app that the entire household can use. Every member will be able to sign in and update the communcal grocery list


## Prerequisites

To run, first make sure you have Node installed. You can type node -v to find your version:
```
$ node -v 
v8.11.2
```
If you do not have Node installed you can download from their website: https://nodejs.org/en/download/ 

You will also need to have Postgres installed on your computer for the data management. I recommend installation via homebrew. Here's a link: https://gist.github.com/ibraheem4/ce5ccd3e4d7a65589ce84f2a3b7c23a3

please see the package.json for all dependencies you will need to install

### Installing
Once you have cloned and downloaded all necessary dependencies. You will need to create a .env file for your environmental variables. For example, the secret for the express-session middleware will be securely stored there. Ensure that .env is listed in your .gitignore file.

Once the repository has been cloned, all dependencies installed, your database created and .env file created properly you can then run the app locally:
```
$ npm start
```
It should appear on http://localhost:3000.

### Built With

NodeJS - Javascript runtime for server-side management

Postgresql - For database management

Jasmine - TDD(test driven development) is not complete for the app, but I would like to finish it if given more time

EJS - If I were to re-build this app I would use React instead of ejs and html forms


