var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/*
app.get('/', function(req, res){
  res.sendFile(__dirname + '/resources/index.html');
});
*/

var model = {
  instruments: null,
  words: null
};

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('getCurrentInstruments', function() {
    console.log('getting current instruments', model.instruments);
    io.emit('getCurrentInstrumentsResponse', model.instruments);
  });
  socket.on('getCurrentWords', function() {
    console.log('geting current words', model.words);
    io.emit('getCurrentWordsResponse', model.words);
  });

  socket.on('updateInstruments', function(instruments){
    console.log('updating instruments', instruments);
    model.instruments = instruments;
    io.emit('updateInstruments', instruments);
  });

  socket.on('updateWords', function(words) {
    console.log('updating words', words);
    model.words = words;
    io.emit('updateWords', words);
  });

  socket.on('play', function() {
    console.log('play');
    io.emit('play');
  });

  socket.on('startSequence', function() {
    console.log('startSequence');
    io.emit('startSequence');
  });

  socket.on('stopSequence', function() {
    console.log('stopSequence');
    io.emit('stopSequence');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
