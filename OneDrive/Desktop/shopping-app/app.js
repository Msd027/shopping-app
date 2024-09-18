let express = require('express');
let {dbConnect, getData} = require('./controller/dbController');
let app = express();
let port = 8453;
let cors = require('cors');
let swaggerUi = require('swagger-ui-express');
let swaggerDocument = require('./swagger.json');
let packageNumber = require('./package.json');
let { ObjectId } = require('mongodb');

// Update Swagger version
swaggerDocument.info.version = packageNumber.version;
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middleware
app.use(express.json());
app.use(cors());

// Root route
app.get('/', (req, res) => {
    res.send('Hi from Express');
});

// Categories route
app.get('/category', async (req, res) => {
    let query ={};
    let collection = "category";
    let output = await getData(collection,query);
    res.send(output)
});

// item route
app.get('/item', async (req, res) => {
    let query = {};
    let categoryId = req.query.categoryId;
    let collection = "item";

    if (categoryId) {
        query = { categoryId: Number(categoryId) };
    }

    let output = await getData(collection, query);
    res.send(output);
});

//sort on basis of name and cost
app.get("/filter/:categoryId", async (req, res) => {
    let query = {};
    let category_id = Number(req.params.categoryId);
    let name = req.query.name;

    if (category_id) {
        query["categoryName"] = category_id;
    }

    if (name) {
        query["name"] = { $regex: name, $options: "i" }; // case-insensitive search
    }

    console.log("Query Object:", query); // Log the query object before sending it to the database

    try {
        const results = await db.collection('shopping').find(query).toArray();
        console.log("Results:", results); // Log the results from the database
        res.json(results);
    } catch (err) {
        res.status(500).send("Error fetching data.");
    }
});




app.post('/item',async(req,res) => {
    if(Array.isArray(req.body.id)){
        let query = {menu_id:{$in:req.body.id}};
        let collection = 'item'
        let output = await getData(collection,query);
        res.send(output)
    }else{
        res.send(`Please pass data in format of {"id":[1,2,3]}`)
    }
})

// Start server
app.listen(port,(err) => {
    dbConnect()
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})
