Meteor.publish('cars', function() {
  return Cars.find({
    author: this.userId
  })
});

Meteor.publish('teams', function() {
  return Teams.find({})
});
