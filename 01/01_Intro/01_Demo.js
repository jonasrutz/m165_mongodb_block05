//Show databases
show databases;
//or shorter
show dbs;
//Create and switch to database
use Events;
//Create collection
db.createCollection('person');
//Show collection of the used db
show collections;
db.person.insertOne({
  "name": "Hans Muster",
  "address": "Seestrasse 110",
  "zip": "9000",
  "city": "St.Gallem"
});

//The insertOne command is used to insert one document at a time, as in the following syntax:
db.blogs.insertOne(
  {
    username: "hmuster", noOfBlogs: 100,
    tags: ["computer", "games", "biking"]
  })

/* Inserting Multiple Documents
The insertMany command inserts multiple documents at once. You can pass an array of documents to the command:
*/
db.blogs.insertMany([
  { username: "fritzli", noOfBlogs: 100, tags: ["computer", "games", "biking"] },
  { username: "annab", noOfBlogs: 50, tags: ["cooking", "chilling"] },
  { username: "fredyX", noOfBlogs: 40, tags: ["party", "music"] }
])

/*
Fetching Documents from MongoDB
With find you check whether your inserts are actually saved in the collections.
*/
db.blogs.find();
//Delete a collection
db.blogs.drop();
//Delete actual database
db.dropDatabase();