const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";
MongoClient.connect(url, { useNewUrlParser: true }, (err, client)=>{
  if(err)
    return console.log("Unable to connect to server");
  console.log("Connected to MongoDb server");
   const db = client.db('TodoApp');
   db.collection('Todos').insertOne({
     text: "New insert from node .js",
     completed: false
  }, (err, result) => {
     if(err){
       client.close();
       console.log("Error inserting document");
   }
   console.log(JSON.stringify(result.ops, undefined, 2));
   });

  db.collection('Users').insertOne({
    name: 'Sabarigirivasan',
    age: 35,
    location: 'Lake Forest, California'
  }, (err, result) => {
    if(err){
      client.close();
      console.log("Error inserting document");
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
});


  client.close();
});
