let mongo = require('mongodb');
let { MongoClient } = mongo;
let mongoUrl = "mongodb+srv://mddanish151:iECrkUcDu1P3YbNY@cluster0.zlci9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let client = new MongoClient(mongoUrl,

)
async function dbConnect() {
    await client.connect();
    db = client.db('shopping');
    console.log("Connection Successful");
}

async function getData(collectionName, query) {
    let output = [];
    try {
        const cursor = db.collection(collectionName).find(query);
        for await (const data of cursor) {
            output.push(data);
        }
        cursor.close();
    } catch (err) {
        output.push({ "Error": "Error in get Data" });
    }
    return output;
}

module.exports = {
    dbConnect,
    getData
};
