import DS from 'ember-data';

export default DS.Model.extend({

  name                  :DS.attr('string'),
  model                 :DS.attr('string'),
  maxAtmospheringSpeed  :DS.attr('string'),
  costInCredits         :DS.attr('number'),
  crew                  :DS.attr('number'),
  length                :DS.attr('number'),
  starshipClass         :DS.attr('string'),
  cargoCapacity         :DS.attr('number'),
  hyperdriveRating      :DS.attr('string'),
  passengers            :DS.attr('number')

});
