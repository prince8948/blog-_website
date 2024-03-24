import express from 'express'
import Connection from './database/mydb.js';
import dotenv from 'dotenv';
import router from './routers/userRouter.js';
// dotenv functions are used to make our data base authencity private or protected
dotenv.config();

const app = express();
app.use('/', router)
// this is port which we wants to connects
// and install nodemon for restart server on any changes npm i --save-dev nodemon
const PORT = 8000;
app.listen(PORT, ()=> console.log('Server in running successfully on port', PORT ));
// call function for checking database connection

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME, PASSWORD);