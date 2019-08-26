import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  players: service('all-players'),

  actions: {
    winnerIs: function(){


      let massOne = document.getElementById('mass-one').innerText;
      let massTwo = document.getElementById('mass-two').innerText;

      try{

        massOne = parseInt(massOne);

      }catch (e) {

        massOne = 0;

      }

      try{

        massTwo = parseInt(massTwo);

      }catch (e) {

        massTwo = 0;

      }

      if (Number(massOne) > Number(massTwo)){
        let name = document.getElementById('name-one');
        this.players.playerWon(name.innerText);
        name.style.color = 'green';
      }else if (Number(massOne) == Number(massTwo)) {
        let nameOne = document.getElementById('name-one');
        nameOne.style.color = 'green';
        let nameTwo = document.getElementById('name-two');
        nameTwo.style.color = 'green';
        this.send('invalidateModel');
      }else{
        let name = document.getElementById('name-two');
        this.players.playerWon(name.innerText);
        name.style.color = 'green';
      }

    },
   getNewModel: function(){
     this.send('invalidateModel');
   }
  }
});
