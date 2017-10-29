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
  number: {
    type: Number,
    label: "Race Number",
    optional:true,
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
  }

});


Cars.attachSchema(carSchema);
