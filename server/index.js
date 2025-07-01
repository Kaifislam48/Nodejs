import express from 'express'; // Importing express package
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

app.listen(3000, function() {  // running the server on port 3000
    console.log("Server is running at localhost:3000");
});

let arr = [1, 2, 3, 4, 5];

//get api with route /
app.get("/", async function (req, res) {
    // console.log(req);  // req is the request object
    res.json(arr);
});

// post api
app.post("/add", async(req, res) =>  {
    const {num} = req.body; 
    arr.push(num);  
    res.json(arr);
});