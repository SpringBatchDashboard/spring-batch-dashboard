define(
    ['backbone', 'jobs.view', 'instances.view'],

    function (Backbone, JobsView, InstancesView) {
        console.log('Router.js loaded');

        var Router = Backbone.Router.extend({

                initialize: function (options) {
                    console.log('Router initialized');
                },

                routes: {
                    'home': 'goJobs',
                    'jobs': 'goJobs',
                    'instances': 'goInstances'
                },

                goJobs: function () {
                    var view = new JobsView();
                    $('#main').html(view.render().el);
                },

                goInstances: function (jobName) {
                    var view = new InstancesView({jobName: jobName});
                    $('#main').html(view.render().el);
                }
            }
        );

        return Router;
    }
);
