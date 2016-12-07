DashboardApp.Router = Backbone.Router.extend({

    routes: {
        'home': 'goHome',
        'jobs': 'goJobs',
        'instances': 'goJobInstances'
    },

    goHome: function () {
        var view = new DashboardApp.Views.HomeView();
        $('#main').html(view.render().el);
    },

    goJobs: function () {
        var view = new DashboardApp.Views.JobView();
        $('#main').html(view.render().el);
    },

    goJobInstances: function (jobName) {
        var view = new DashboardApp.Views.JobInstanceView({jobName: jobName});
        $('#main').html(view.render().el);
    }
});