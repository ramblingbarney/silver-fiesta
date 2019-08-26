import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  starshipsNumber: service('max-starships'),
  personsNumber: service('max-people'),
  players: service('all-players'),
  name: null,
  playerDropdown: 0,

  actions: {
    addPlayer(){
      let nextId = this.players.getLastId();
      let playerName = this.get('name');
      let player = { 'id': nextId, 'name': playerName, 'score': 0 };
      this.players.add(player);
      this.set('name', '');
      this.set('playerDropdown', this.playerDropdown + 1);
    }
  }
});
