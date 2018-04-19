var Parse = require('parse/node');

Parse.initialize("myAppId");
Parse.serverURL = 'http://localhost:1337/parse'

var ClassObject = Parse.Object.extend('GameScore');
var query = new Parse.Query(ClassObject);
var subscription = query.subscribe();


subscription.on('open', () => {
    console.log('connection opened');
  });

subscription.on('update', function(obj)
{
  console.log('update', obj.attributes)
});


// gameScore.set("score", 1337);
// gameScore.set("playerName", "Sean Plott");
// gameScore.set("cheatMode", false);

// gameScore.save(null, {
//   success: function(gameScore) {
//     // Execute any logic that should take place after the object is saved.
//     console.log('New object created with objectId: ' + gameScore.id);
//   },
//   error: function(gameScore, error) {
//     // Execute any logic that should take place if the save fails.
//     // error is a Parse.Error with an error code and message.
//     console.log('Failed to create new object, with error code: ' + error.message);
//   }
// });


// var query = new Parse.Query('GameScore');
// query.get("k5bzOBqKIo", {
//     success: function (gameScore) {
//         // The object was retrieved successfully.
//         console.log(gameScore.get('score'))
//     },
//     error: function (object, error) {
//         // The object was not retrieved successfully.
//         // error is a Parse.Error with an error code and message.
//     }
// })

// let subscription = client.subscribe( query)
// // subscription.on('open', () => {
//     console.log('subscription opened');
//    }, err => console.log);


