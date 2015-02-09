
import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],

  actions: {
    play: function(route) {
      this.get('controllers.application.socket')
          .emit('play');
    },
    startSequence: function() {
      this.get('controllers.application.socket')
          .emit('startSequence');
    },
    stopSequence: function() {
      this.get('controllers.application.socket')
          .emit('stopSequence');
    }
  }
});
