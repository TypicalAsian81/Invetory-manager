import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
import mysql from 'mysql2';
// const Book = require('../');
const app = express();

const db = mysql.createConnection({
  user: 'admin',
  host: '127.0.0.1',
  password: 'Tinatutu2003',
  // database: 'loginsystem',
  port: 3306,
});

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
app.use(
  cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST"],
      credentials: true,
  })
);



app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('DBMS Project');
});

app.use('/books', booksRoute);

mongoose
  .connect("mongodb+srv://leap:TkYvFHCMsnsJ2SbX@cluster0.ifqqbw0.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true
  })
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });



  app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    db.execute(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (err, result)=> {
            if (err) {
                res.send({err: err});
            }
    
            if (result.length > 0) {
                res.send( result);
                }else({message: "Wrong username/password comination!"});
        }
        
    );
   });
   app.post('/register', (req, res)=> {
    db.execute(
      'INSERT INTO users (username, password) VALUES (?,?)',
      [username, password],
      (err, result)=> {
      console.log(err);
      }
    );
 });
   app.listen(3001, () => {
       console.log("running server");
   });


