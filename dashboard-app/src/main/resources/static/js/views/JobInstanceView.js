DashboardApp.Views.JobInstanceView = Backbone.View.extend({

    initialize: function (options) {
    },

    render: function () {

        var columns = [
            {name: "jobInstanceId", label: "ID", cell: "string", editable: false},
            {name: "jobName", label: "Name", cell: "string", editable: false},
            {name: "version", label: "Version", cell: "string", editable: false},
            {name: "jobKey", label: "Key", cell: "string", editable: false}
        ];

        var jobInstances = new DashboardApp.Collections.JobInstanceCollection();

        // grid
        var grid = new Backgrid.Grid({
            columns: columns,
            collection: jobInstances
        });
        $("#grid").html(grid.render().el);

        // paginator
        var paginator = new Backgrid.Extension.Paginator({
            collection: jobInstances
        });
        $("#paginator").html(paginator.render().el);

        // filter
        var filter = new Backgrid.Extension.ClientSideFilter({
            collection: jobInstances,
            fields: ['jobName']
        });
        $("#search").html(filter.render().el);

        jobInstances.fetch({reset: true});
        return this;
    }
});