//homepage
FlowRouter.route('/', {
  name: 'home',
  action() {

    GAnalytics.pageview();

    BlazeLayout.render("layout", {
      main: "homeLayout"
    });
    if ($('#topNavUl li').hasClass('tnActive')) {
      $('#topNavUl li').removeClass('tnActive');
    }
    $('#tnHome').addClass('tnActive');

  }
});


//homepage
FlowRouter.route('/docs', {
  name: 'docs',
  action() {
    if ($('#topNavUl li').hasClass('tnActive')) {
      $('#topNavUl li').removeClass('tnActive');
    }
    $('#tnDocs').addClass('tnActive');
    GAnalytics.pageview();
    BlazeLayout.render("layout", {
      main: "docsLayout"
    });
  }
});


//about
FlowRouter.route('/about', {
  name: 'about',
  action() {

    if ($('#topNavUl li').hasClass('tnActive')) {
      $('#topNavUl li').removeClass('tnActive');
    }
    $('#tnAbout').addClass('tnActive');
    GAnalytics.pageview();
    BlazeLayout.render("aboutLayout", {
      main: "About"
    });
  }
});

//forum
FlowRouter.route('/forum', {
  name: 'forum',
  action() {
    if ($('#topNavUl li').hasClass('tnActive')) {
      $('#topNavUl li').removeClass('tnActive');
    }
    $('#tnForum').addClass('tnActive');
    GAnalytics.pageview();
    BlazeLayout.render("forumLayout", {
      main: "Forum"
    });
  }
});


//dashboard
FlowRouter.route('/dash', {
  name: 'dash',
  action() {
    if ($('#topNavUl li').hasClass('tnActive')) {
      $('#topNavUl li').removeClass('tnActive');
    }
    $('#tnDash').addClass('tnActive');
    GAnalytics.pageview();
    BlazeLayout.render("layout", {
      main: "dashLayout"
    });
  }
});

//dashboard profile
FlowRouter.route('/dash/profile', {
  name: 'dashProfile',
  action() {

    if ($('.sidebarul li').hasClass('sbActive')) {
      $('.sidebarul li').removeClass('sbActive');
    }
    $('#sbProfile').addClass('sbActive');
    GAnalytics.pageview();
    BlazeLayout.render("dashLayout", {
      dashContent: "userProfile"
    });
  }
});

// myTeam
FlowRouter.route('/dash/team', {
  name: 'dashTeam',
  action() {

    if ($('.sidebarul li').hasClass('sbActive')) {
      $('.sidebarul li').removeClass('sbActive');
    }
    $('#sbTeam').addClass('sbActive');
    GAnalytics.pageview();
    BlazeLayout.render("dashLayout", {
      dashContent: "myTeam"
    });
  }
});
