import express  from "express";
import path from 'path';
import { fileURLToPath } from "url";
import fs from "fs";

const app = express();

// middleware logic 
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// global objectss 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// rest api  
app.get("/getAllUsers", (req, res)=>{
    fs.readFile(__dirname+"/"+"users.json",(err, data)=>{
        res.end(data);
    })
})

app.get("/getUserById/:id", (req, res)=>{
    fs.readFile(__dirname+"/"+"users.json",(err, data)=>{

        const users = JSON.parse(data);
        const user = users["user"+req.params.id];
        res.end(JSON.stringify(user));
    })
})

// post new user informationnn 
app.post("/addUser", (req, res)=>{
    fs.readFile(__dirname+"/"+"users.json",(err, data)=>{

        const users = JSON.parse(data);
        const user = req.body.user4;
        users["user"+user.id] = user;
        res.end(JSON.stringify(users));
    })
})

//change user information 
app.put("/changeUser", (req, res)=>{
    fs.readFile(__dirname+"/"+"users.json",(err, data)=>{

        const users = JSON.parse(data);
        const id = "user"+req.params.id; 
        users[id] = req.body;
        res.end(JSON.stringify(users)); 
    })
})

// server logic  
app.listen(5000, () => {
    console.log(`Server is listening at http://localhost:5000`);
});

