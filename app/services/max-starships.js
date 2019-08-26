import Service from '@ember/service';

export default Service.extend({
  totalStarships: null,

  init() {
    this._super(...arguments);
    fetch('https://swapi.co/api/starships/')
      .then(data=>{return data.json()})
        .then(res=>{
          this.set('totalStarships', res.count);});
  },
  cleartotalPeople() {
    this.set('totalStarships', null);
  },
  randomStarshipSelect(){
    let randomNumber = Math.floor(Math.random() * this.totalStarships) + 1;
    return randomNumber
  },
  calc() {
    return 37;
  }

});
