import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('display', {path: '/display'});
  this.route('input', {path: '/input'});
});

export default Router;
