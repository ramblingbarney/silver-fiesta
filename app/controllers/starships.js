import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  players: service('all-players'),

  actions: {
    winnerIs: function(){


      let crewOne = document.getElementById('crew-one').innerText;
      let crewTwo = document.getElementById('crew-two').innerText;

      try{

        crewOne = parseInt(crewOne);

      }catch (e) {

        crewOne = 0;

      }

      try{

        crewTwo = parseInt(crewTwo);

      }catch (e) {

        crewTwo = 0;

      }



      if (Number(crewOne) > Number(crewTwo)){

        let name = document.getElementById('name-one');
        this.players.playerWon(name.innerText);
        name.style.color = 'green';

      }else if (Number(crewOne) == Number(crewTwo)) {
        let crewOne = document.getElementById('name-one');
        crewOne.style.color = 'green';
        let crewTwo = document.getElementById('name-two');
        crewTwo.style.color = 'green';
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
