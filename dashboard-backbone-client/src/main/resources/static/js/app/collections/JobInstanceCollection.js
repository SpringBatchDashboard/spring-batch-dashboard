DashboardApp.Collections.JobInstanceCollection = Backbone.PageableCollection.extend({
    model: DashboardApp.Models.JobInstanceModel,

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