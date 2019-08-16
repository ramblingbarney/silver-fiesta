import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return [
      { title: 'Ember Roadmap' },
      { title: 'Accessibility in Ember' },
      { title: 'EmberConf Recap' }
    ]
  }
});
