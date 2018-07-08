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

  db.collection('Users').findOneAndUpdate({_id: new ObjectID('5b4010f7fdab85bcb70aeac0')},
    {
      $set: {name: 'Jayati Sabarigirivasan'},
      $inc: {age: 1}
    },
    {
      returnNewDocument: true,
      returnOriginal: false
    }
  ).then((result) => {
    console.log(result);
  }, (err)=> {
    console.log("Error fetching data, "+err);
  });
  client.close();
});
