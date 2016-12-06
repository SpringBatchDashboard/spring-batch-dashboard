DashboardApp.Router = Backbone.Router.extend({

    routes: {
        'home': 'goHome',
        'jobs': 'goJobs',
        'instances': 'goJobInstances',
        'jobInstances': 'goJobInstances'
    },

    goHome: function () {
        var view = new DashboardApp.Views.HomeView();
        $('#main').html(view.render().el);
    },

    goJobs: function () {
        var view = new DashboardApp.Views.JobView();
        $('#main').html(view.render().el);
    },

    goJobInstances: function (param) {
        if (param) {
            $.ajax({
                    url: "api/jobInstances/search/findAllByJobNameOrderByIdDesc",
                    data: {name: param},
                    success: function (data) {
                        var view = new DashboardApp.Views.JobInstanceView({models: data});
                        $('#main').html(view.render().el);
                    }
                }
            )
        } else {
            $.ajax({
                    url: "api/jobInstances",
                    data: {},
                    success: function (data) {
                        var view = new DashboardApp.Views.JobInstanceView({models: data});
                        $('#main').html(view.render().el);
                    }
                }
            )
        }
    }
});