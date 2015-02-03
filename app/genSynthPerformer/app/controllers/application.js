/*global
  io:false
*/
import Ember from 'ember';

export default Ember.Controller.extend({
  initializeSocket: function() {
    var socket = io.connect('http://localhost:3000');
    this.socket = socket;
    //socket.on('chat message', function(msg){
    //  $('#messages').append($('<li>').text(msg));
    //});
  }.on('init'),

  actions: {
    updateInstruments: function() {
      this.socket.emit('chat message', $('#m').val());
      $('#m').val('');
    }
  }
});
