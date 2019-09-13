/* Add all the required libraries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect('mongodb+srv://guest:2020Suwift.js@bootcamp-c8yzt.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});


/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  //console.log(Listing.find({ code: 'LBW' ,name: 'Library West' }));

  Listing.findOne({code: 'LBW', name: 'Library West'}, function(err,obj) { console.log(obj); });
};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.findOneAndRemove({code: 'CABL'}, function(err,obj) { console.log(obj); });
};

var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  Listing.findOneAndUpdate({code: 'PHL', name: 'Phelps Laboratory'}, {$set: {address:'1953 Museum Rd, Gainesville, FL 32603'}}, function(err,obj) { console.log(obj); });
};

var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */

  Listing.find(function(err,obj) { console.log(obj); });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();