import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
  starshipsNumber: service('max-starships'),
  players: service('all-players'),

  model() {
    return RSVP.hash({
      currentPlayers: {'playerOneName': this.players.currentPlayers[0].name ,'playerTwoName': this.players.currentPlayers[1].name},
      playerOne: this.get('store').findRecord('starships',this.starshipsNumber.randomStarshipSelect()),
      playerTwo: this.get('store').findRecord('starships',this.starshipsNumber.randomStarshipSelect())
    });
  },

  afterModel() {
    // This hook will not fire.
  },
  actions: {
    invalidateModel: function() {
      //refresh the model
      this.refresh();
    },
    error() {
      this.transitionTo('not-found');
    }
  }
});
