import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr(),
  age: DS.attr(),
  image: DS.attr()

});
