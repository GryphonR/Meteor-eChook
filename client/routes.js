//homepage
FlowRouter.route('/', {
  name: 'home',
  action() {
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

    BlazeLayout.render("dashLayout", {
      dashContent: "myTeam"
    });
  }
});
