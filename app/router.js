import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('search', { path: '/:searched' }, function() {

  });

  this.route('account', function() {
    this.route('login', function() {

    });
  });

  this.route('404', { path: '/*path' }, function() {

  });
});

export default Router;
