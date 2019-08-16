import DS from 'ember-data';

export default DS.Model.extend({

  name      :DS.attr('string'),
  height    :DS.attr('number'),
  mass      :DS.attr('number'),
  hairColor :DS.attr('string'),
  skinColor :DS.attr('string'),
  eyeColor  :DS.attr('string'),
  birthYear :DS.attr('string'),
  gender    :DS.attr('string'),
  starships :DS.attr('string')

});
