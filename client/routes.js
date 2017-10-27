//homepage
FlowRouter.route('/',{
  name: 'home',
  action(){
    BlazeLayout.render("homeLayout", {main:"Home"});
  }
});
