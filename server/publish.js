Meteor.publish('cars', function(){
  return Cars.find({author: this.userId})
});
