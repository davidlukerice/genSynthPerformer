/*global
io:false
*/
import Ember from 'ember';

export default Ember.Controller.extend({
  init: function() {
    var socket = io.connect('http://localhost:3000');
  }.on('init'),

  actions: {

  }
});
