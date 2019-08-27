import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
players: service('all-players'),

didInsertElement(){

    document.getElementById('nav-leaderboard').innerHTML = '';

    let leaderboard = '';

    for (let i=0; i < this.players.allPlayers.length; i++){

      leaderboard += "<li class=\"leaderboard-li\">" + this.players.allPlayers[i].name + " - " + this.players.allPlayers[i].score + "</li>";


    }
    document.getElementById('nav-leaderboard').innerHTML = leaderboard;
   }








});
