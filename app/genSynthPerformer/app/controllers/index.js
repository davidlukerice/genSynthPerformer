
import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],

  model: null,

  setupModel: function() {
    this.set('model', this.get('controllers.application.model'));
  }.on('init'),

  actions: {
    visit: function(route) {
      this.get('controllers.application').send('visit', route);
    },

    updateInstruments: function() {
      this.get('controllers.application').send('updateInstruments');
    },

    updateWords: function() {
      this.get('controllers.application').send('updateWords');
    }
  }
});
