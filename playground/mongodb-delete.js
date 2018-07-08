const {MongoClient, ObjectID} = require('mongodb');

const url = "mongodb://localhost:27017/";
MongoClient.connect(url, { useNewUrlParser: true }, (err, client)=>{
  if(err)
    return console.log("Unable to connect to server");
  console.log("Connected to MongoDb server");
  const db = client.db('TodoApp');

  // db.collection('Users').findOneAndDelete({name: 'Jaystuti'}).then((result) => {
  //   console.log(result);
  // }, (err)=> {
  //   console.log("Error fetching data, "+err);
  // });

  db.collection('Users').deleteOne({_id: new ObjectID('5b40111ffdab85bcb70aeace')}).then((result) => {
    console.log(result);
  }, (err)=> {
    console.log("Error fetching data, "+err);
  });
  client.close();
});
