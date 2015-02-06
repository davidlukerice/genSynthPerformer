
import Ember from 'ember';
import Network from 'asNEAT/network';

export default Ember.Controller.extend({
  needs: ['application'],

  model: null,
  instrumentNetworks: Ember.A(),

  setupModel: function() {
    this.set('model', this.get('controllers.application.model'));
  }.on('init'),
  initHandlers: function() {
    var self = this,
        socket = this.get('controllers.application.socket');
    socket.on('play', function() {
      self.send('play');
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

  actions: {
    play: function() {
      var networks = this.get('instrumentNetworks');
      if (!networks.length)
        return;
      networks[0].play();
    }
  }
});
