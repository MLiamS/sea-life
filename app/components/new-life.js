import Ember from 'ember';

export default Ember.Component.extend({
  addNewLife: false,
  actions: {
    lifeFormShow() {
      this.set('addNewLife', true);
    },

    saveLife() {
      var params = {
        type: this.get('type'),
        age: this.get('age'),
        image: this.get('image'),
      };
      this.set('addNewLife', false);
      this.sendAction('saveLife', params);
    }
  }
});
