import Service from '@ember/service';

export default Service.extend({
  allPlayers: null,
  currentPlayers: null,

  init() {
    this._super(...arguments);
    this.set('allPlayers', []);
    this.set('currentPlayers', []);
    let defaultPlayer = { id: 0, name: 'computer', score: 0 };
    this.get('allPlayers').pushObject(defaultPlayer);
    this.get('currentPlayers').pushObject(defaultPlayer);
    this.get('currentPlayers').pushObject(defaultPlayer);
  },

  add(element) {
    //this should have a check to stop the same name being added twice
    this.get('allPlayers').pushObject(element);
  },

  remove(element) {
    this.get('allPlayers').removeObject(element);
  },

  empty() {
    this.get('allPlayers').setObjects([]);
  },
  playerWon(name) {
    for (let i=0; i < this.allPlayers.length; i++){
      if (name == this.allPlayers[i].name){
        this.allPlayers[i].score = this.allPlayers[i].score + 1;
      }
    }
  },
  setCurrentPlayer(playerBoxId, id){

    this.currentPlayers[playerBoxId] = this.allPlayers[id];

  },
  getLastId(){
    return this.allPlayers.length;
  },

  testMethod() {
    return this.allPlayers[0];
  }
});
