import Ember from 'ember';

export default Ember.Route.extend({
  model()  {
    return this.store.findAll('life');
  },

  actions: {
    saveLife(params) {
      var newRental = this.store.createRecord('life', params);
      newRental.save();
      this.transitionTo('index');
    },

    destroyLife(life) {
      life.destroyRecord();
      this.transitionTo('index');
    }
  }
});
