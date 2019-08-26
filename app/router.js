import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('people');
  this.route('starships');
  this.route('leaderboard');
  this.route('notFound');
});

export default Router;
