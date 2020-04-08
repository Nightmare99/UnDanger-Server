 # UnDanger Server
 Made using ExpressJS and MongoDB.
 Only one type of user - can create courses as well as enroll in courses. Similar to Google Classrooms.
 ## Dependencies
 - NodeJS
 - NPM
 - ExpressJS
 - Body-parser
 - MongoDB
 - Mongoose
 - Nodemon
 - Multer

 ## Installation
 Run ```npm install```
 
 ## Starting server
 Run ```npm start```
 
 Server starts at port ```8080```. Access using http://localhost:8080/test to check if it runs.
 
 ## Features
 - CRUD for users of the UnDanger app.
 - A decent amount of error handling.
 
 ## A brief peek under the hood
 There are 3 main components of this app:
 - The models (inside ```/models```) which contains the MongoDB User schema.
 - The database operations (inside ```/helpers```) which implement mongoose CRUD methods for MongoDB.
 - The ExpressJS web server in ```app.js```.
 - The audio samples recorded by users using the app is stored in the uploads folder, which is created in runtime.