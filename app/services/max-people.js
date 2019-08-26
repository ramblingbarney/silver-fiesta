import Service from '@ember/service';

export default Service.extend({
  totalPeople: null,

  init() {
    this._super(...arguments);
    fetch('https://swapi.co/api/people/')
      .then(data=>{return data.json()})
        .then(res=>{
          this.set('totalPeople', res.count+ 1);
        });
  },
  cleartotalPeople() {
    this.set('totalPeople', null);
  },
  randomPeopleSelect(){
    let randomNumber = Math.floor(Math.random() * this.totalPeople) + 1;
    return randomNumber
  },

  calc() {
    return 88;
  }

});
