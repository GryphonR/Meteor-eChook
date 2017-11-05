Template.carList.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('cars');
  });
});

Template.carList.helpers({
  cars: () => {
    return Cars.find({})

  }

});

SimpleSchema.debug = true;