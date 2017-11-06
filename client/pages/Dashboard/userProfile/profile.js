Template.profile.helpers({
  firstName: function() {
    return Meteor.user().profile.firstName;
  }
});

Template.profile.helpers({
  lastName: function() {
    return Meteor.user().profile.lastName;
  },
  team: function() {
    return Meteor.user().profile.team;
  },
  role: function() {
    return Meteor.user().profile.role;
  },
  teamNull: function() {
    if (Meteor.user().profile.team === "null") {
      return true;
    } else {
      return false;
    }
  }
});
