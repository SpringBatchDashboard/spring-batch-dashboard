define(['underscore', 'backbone', 'instances.model', 'backbone.paginator'],

    function (_, Backbone, InstancesModel) {
        console.log('InstancesCollection.js loaded');

        var InstancesCollection = Backbone.PageableCollection.extend({

            model: InstancesModel,

            state: {
                pageSize: 20
            },

            mode: "client",

            url: function () {
                if (this.jobName) {
                    return "api/jobInstances/search/findAllByJobNameOrderByIdDesc?jobName=" + this.jobName;
                } else {
                    return "api/jobInstances";
                }
            },

            initialize: function (options) {
                this.jobName = options.jobName;
            },

            parse: function (response) {
                return response._embedded.jobInstances;
            }
        });

        return InstancesCollection;
    }
);
