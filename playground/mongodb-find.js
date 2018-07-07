const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";
MongoClient.connect(url, { useNewUrlParser: true }, (err, client)=>{
  if(err)
    return console.log("Unable to connect to server");
  console.log("Connected to MongoDb server");
  const db = client.db('TodoApp');
  db.collection('Users').find({name: 'Sabarigirivasan'}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err)=> {
    console.log("Error fetching data, "+err);
  })
  client.close();
});
