DashboardApp.Collections.JobInstanceCollection = Backbone.PageableCollection.extend({
    model: DashboardApp.Models.JobInstanceModel,

    url: "api/jobInstances",

    state: {
        pageSize: 20
    },

    mode: "client",

    initialize: function (options) {
    },

    parse: function (response) {
        return response._embedded.jobInstances;
    }
});