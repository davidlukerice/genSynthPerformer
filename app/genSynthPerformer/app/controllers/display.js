
import Ember from 'ember';
import asNEAT from 'asNEAT/asNEAT';

export default Ember.Controller.extend({
  actions: {
    visit: function(route) {
      this.transitionToRoute(route);
    }
  }
});
