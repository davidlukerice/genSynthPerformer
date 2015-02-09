
import Ember from 'ember';
import Network from 'asNEAT/network';

var SequenceStates = {
  IDLE: 'idle',
  PLAYING: 'playing',
  STOPPED: 'stopped'
};

export default Ember.Controller.extend({
  needs: ['application'],

  model: null,
  instrumentNetworks: Ember.A(),
  currentState: SequenceStates.IDLE,

  setupModel: function() {
    this.set('model', this.get('controllers.application.model'));
  }.on('init'),
  initHandlers: function() {
    var self = this,
        socket = this.get('controllers.application.socket');
    socket.on('play', function() {
      self.send('play');
    });
    socket.on('startSequence', function() {
      self.send('startSequence');
    });
    socket.on('stopSequence', function() {
      self.send('stopSequence');
    });
  }.on('init'),

  setupInstruments: function() {
    var instruments = this.get('model.instruments'),
        networks = this.get('instrumentNetworks');
    networks.clear();
    _.forEach(instruments, function(instrument) {
      networks.pushObject(Network.createFromJSON(instrument));
    });
  }.observes('model.instruments.@each'),

  sequence: Ember.A(),

  actions: {
    play: function() {
      var networks = this.get('instrumentNetworks');
      if (!networks.length)
        return;
      networks[0].play();
    },

    startSequence: function() {
      this.set('currentState', SequenceStates.PLAYING);
    },

    stopSequence: function() {
      this.set('currentState', SequenceStates.STOPPED);
    }
  }
});
