//homepage
FlowRouter.route('/',{
  name: 'home',
  action(){
    BlazeLayout.render("layout", {main:"homeLayout"});
  }
});


//homepage
FlowRouter.route('/docs',{
  name: 'docs',
  action(){
    BlazeLayout.render("layout", {main:"docsLayout"});
  }
});


//about
FlowRouter.route('/about',{
  name: 'about',
  action(){
    BlazeLayout.render("aboutLayout", {main:"About"});
  }
});

//forum
FlowRouter.route('/forum',{
  name: 'forum',
  action(){
    BlazeLayout.render("forumLayout", {main:"Forum"});
  }
});


//dashboard
FlowRouter.route('/dash',{
  name: 'dash',
  action(){
    BlazeLayout.render("layout", {main:"dashLayout"});
  }
});

//dashboard profile
FlowRouter.route('/dash/profile',{
  name: 'dashProfile',
  action(){
    BlazeLayout.render("layout", {main:"dashLayout"});
    BlazeLayout.render("dashLayout", {dashContent:"userProfile"});
  }
});
