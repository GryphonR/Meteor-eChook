Cars = new Mongo.Collection('cars');

Cars.allow({
  insert: function(userId,doc){
    return !!userId;
  }
});

carSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name",
  },
  author: {
      type: String,
      label: "Author",
      autoValue: function() {
        return this.userId
      },
      autoform:{
        type:"hidden"
      }
  }
});
/*
  ,
  number: {
    type: Number,
    label: "Number",
  },
  createdBy:{
      type: String,
      label: "Created By",
      autoValue: function() {
        return this.userID
      },
      autoform:{
        type:"hidden"
      }
  },
  createdOn: {
    type: Date,
    label:"Created On",
    autoValue: function() {
      return new Date()
    },
    autoform:{
      type:"hidden"
    }
  },
  distanceLogged: {
    type: Number,
    label: "Total Distance Logged",
    autoValue: function(){
      return 0
    },
    autoform:{
      type:"hidden"
    }
  }
});*/

Cars.attachSchema(carSchema);
