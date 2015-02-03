/*global
  io:false
*/
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    visit: function(route) {
      this.transitionToRoute(route);
    }
  }
});
