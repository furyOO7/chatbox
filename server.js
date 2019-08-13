var app = require('./app');
// var port = process.env.PORT || 5000;
// var server = app.listen(port, function () {
//     console.log('Express server listening on port ' + port);
// });
var http = require('http').createServer(app);
http.listen(5000, function(){
    console.log('listening on *:5000');
  })