// // server.js
const express = require('express');
const { MongoClient, ObjectId } = require("mongodb");
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());


// Replace the uri string with your connection string.
const url = 'mongodb://0.0.0.0:27017/';
const client = new MongoClient(url);


// async function run() {
//     try {
//       // Connect to the "insertDB" database and access its "haiku" collection
//       const database = client.db("carrer-connect");
//       const haiku = database.collection("user");
      
//       // Create a document to insert
//       const doc = {
//         title: "Record of a Shriveled Datum",
//         content: "No bytes, no problem. Just insert a document, in MongoDB",
//       }
//       // Insert the defined document into the "haiku" collection
//       const result = await haiku.insertOne(doc);
//       // Print the ID of the inserted document
//       console.log(`A document was inserted with the _id: ${result.insertedId}`);
//     } finally {
//        // Close the MongoDB client connection
//       await client.close();
//     }
//   }
//   // Run the function and handle any errors
// run().catch(console.dir);

client.connect().then(() => {
    console.log("Connected to MongoDB");
}).catch((e) => {
    console.log("Error connecting to MongoDB", e);
})


async function getStudentById(id) {
  try {   
    await client.connect();
    // Get the database and collection on which to run the operation
    const database = client.db("carrer-connect");
    const students = database.collection("student");
    
    const idToFind = '60d5f47b8d1b2c1a4c8e4d72';
    const student = await students.findOne({_id: new ObjectId(idToFind)});

    if (student) {
      console.log('student found:', student);
    } else {
      console.log('No student matches the provided ID.');
    }

  } finally {
    await client.close();
  }
}

async function insertStudent(student) {
  try {
    await client.connect();
    const database = client.db("carrer-connect");
    const students = database.collection("student");
    console.log(student);
    const result = await students.insertOne(student);
    return result.insertedId;

  } finally {
    await client.close();
  }
}

async function addfield(studentId, field) {
  try {
    // Connect to the MongoDB server
    await client.connect();
    const database = client.db("carrer-connect");
    const students = database.collection("student");

    // Update the document by adding a new key-value pair
    const result = await students.updateOne(
      { _id: new ObjectId(studentId) },
      { $set: field }
    );

    if (result.matchedCount === 0) {
      console.log('No document found with the provided ID.');
    } else {
      console.log('Document updated successfully:', result.modifiedCount);
    }
  } catch (err) {
    console.error('An error occurred:', err);
  } finally {
    // Close the connection
    await client.close();
  }
}


app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.post("/student", (req, res) => {
  insertStudent(req.body).then((sid) => {
    res.send(sid);
  }).catch(err => {
    res.status(500).send(err);
  })
})

app.post("/student/:id/field/add", (req, res) => {
  const id = req.params.id
  addfield(id, req.body).then(() => {
    res.send('add successfully '+id);
  }).catch(err => {
    res.status(500).send(err);
  })
})


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
