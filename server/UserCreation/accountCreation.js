Accounts.onCreateUser(function(options, user) {
  // Use provided profile in options, or create an empty object
  user.profile = options.profile || {};

  // Assigns first and last names to the newly created user object
  user.profile.firstName = options.firstName;
  user.profile.lastName = options.lastName;
  user.profile.team = "null";
  user.profile.role = "user";
  user.profile.avatar = "";
  user.profile.postCount = 0; //TODO Needed?


  // Returns the user object
  return user;
});

// var users = [{
//     name: "Normal User",
//     email: "normal@example.com",
//     roles: []
//   },
//   {
//     name: "Team-Member",
//     email: "view@example.com",
//     roles: ['team-member']
//   },
//   {
//     name: "Team-Admin",
//     email: "manage@example.com",
//     roles: ['manage-users']
//   },
//   {
//     name: "Admin User",
//     email: "admin@example.com",
//     roles: ['admin']
//   }
// ];
//
// _.each(users, function(user) {
//   var id;
//
//   id = Accounts.createUser(function(options, user) {
//     // Use provided profile in options, or create an empty object
//     user.profile = options.profile || {};
//
//     // Assigns first and last names to the newly created user object
//     user.profile.firstName = options.firstName;
//     user.profile.lastName = options.lastName;
//     user.profile.team = "null";
//     user.profile.avatar = "";
//     user.profile.postCount = 0; //TODO Needed?
//
//
//     // Returns the user object
//     return user;
//   });
//
//   if (user.roles.length > 0) {
//     // Need _id of existing user record so this call must come
//     // after `Accounts.createUser` or `Accounts.onCreate`
//     Roles.addUsersToRoles(id, user.roles, 'default-group');
//   }
//
// });
