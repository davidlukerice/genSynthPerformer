/*global
  io:false
*/
import Ember from 'ember';

export default Ember.Controller.extend({

  socket: null,

  initializeSocket: function() {
    var socket = io.connect('http://localhost:3000');
    this.set('socket', socket);
    //socket.on('chat message', function(msg){
    //  $('#messages').append($('<li>').text(msg));
    //});
  }.on('init'),

  actions: {
  }
});
