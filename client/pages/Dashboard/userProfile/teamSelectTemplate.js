Template.teamSelect.helpers({
  teams: function() {
    return Teams.find({})
  }
});

Template.teamSelect.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('teams');
  });
});
