var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();

var api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/parse', // Connection string for your MongoDB database
  //   cloud: '/home/myApp/cloud/main.js', // Absolute path to your Cloud Code
  appId: 'myAppId',
  masterKey: 'myMasterKey', // Keep this key secret!
  fileKey: 'optionalFileKey',
  serverURL: 'http://localhost:1337/parse',  // Don't forget to change to https if needed
  liveQuery: {
    classNames: ['GameScore']
  }
});

var ParseDashboard = require('parse-dashboard');

var dashboard = new ParseDashboard({
  "apps": [
    {
      "serverURL": "http://localhost:1337/parse",
      "appId": "myAppId",
      "masterKey": "myMasterKey",
      "appName": "MyParse",
      "supportedPushLocales": []

    }
  ]
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);
app.use('/dashboard', dashboard);


Parse.Cloud.define("averageStars", function(request, response) {
  response.success({
    success: true,
    data: 'first query'
  })
})

// app.listen(1337, function() {
//   console.log('parse-server-example running on port 1337.');
// });


let httpServer = require('http').createServer(app);
httpServer.listen(1337, () => {
  console.log('parse-server-example running on port 1337.');
});
ParseServer.createLiveQueryServer(httpServer);