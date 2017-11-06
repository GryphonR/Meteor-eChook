Teams = new Mongo.Collection('teams');
SimpleSchema.debug = true;

Teams.allow({
  insert: function(userId, doc) {
    return !!userId;
  }
});

teamMembers = new SimpleSchema({
  id: {
    type: String,
    label: "memberId"
  }
});

teamCars = new SimpleSchema({
  id: {
    type: String,
    label: "carId"
  }
})

teamSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  members: {
    type: [teamMembers],
    optional: true,
    autoform: {
      type: "hidden"
    }
  },
  cars: {
    type: [teamCars],
    optional: true,
    autoform: {
      type: "hidden"
    }
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function() {
      return this.userId
    },
    autoform: {
      type: "hidden"
    }
  },
  createdOn: {
    type: Date,
    label: "Created On",
    autoValue: function() {
      return new Date()
    },
    autoform: {
      type: "hidden"
    }
  }

});


Teams.attachSchema(teamSchema);
