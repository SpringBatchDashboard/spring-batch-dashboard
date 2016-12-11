define(['underscore', 'backbone', 'jobs.model', 'backbone.paginator'],

    function (_, Backbone, JobsModel) {
        console.log('JobsCollection.js loaded');

        var JobsCollection = Backbone.PageableCollection.extend({

            model: JobsModel,

            url: "api/jobs",

            state: {
                pageSize: 20
            },

            mode: "client",

            initialize: function (options) {
            },

            parse: function (response) {
                return response._embedded.jobs;
            }
        });

        return JobsCollection;
    }
);
