import Component from '@ember/component';
import { observer } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  players: service('all-players'),
  selectedOption: null,

  isOnChanged: observer('addedPlayerProp', function() {

    let selectOptionsList = document.getElementById('select-option-player-one');
    selectOptionsList.innerHTML = "<option disabled selected> -- Select Player -- </option>";

    for (let i=0; i < this.players.allPlayers.length; i++){

      selectOptionsList +=    "<option value=" + this.players.allPlayers[i].id + ">" + this.players.allPlayers[i].name + "</option>";

    }
    document.getElementById('select-option-player-one').innerHTML = selectOptionsList;

 }),

  didInsertElement(){

    let selectOptionsList = document.getElementById('select-option-player-one').innerHTML;

    for (let i=0; i < this.players.allPlayers.length; i++){

      selectOptionsList +=    "<option value=" + this.players.allPlayers[i].id + ">" + this.players.allPlayers[i].name + "</option>";

    }
    document.getElementById('select-option-player-one').innerHTML = selectOptionsList;

  },
  actions: {
   setSelection: function(selected) {
      this.set('selectedOption', selected)
      let playerBoxId = 0;
      this.players.setCurrentPlayer(playerBoxId,this.get('selectedOption'));
    }
  }
});
