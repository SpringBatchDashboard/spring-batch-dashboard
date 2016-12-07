DashboardApp.Views.JobInstanceView = Backbone.View.extend({

    initialize: function (options) {
        this.data = new DashboardApp.Collections.JobInstanceCollection(options);
    },

    render: function () {

        var columns = [
            {name: "jobInstanceId", label: "ID", cell: "string", editable: false},
            {name: "jobName", label: "Name", cell: "string", editable: false},
            {name: "version", label: "Version", cell: "string", editable: false},
            {name: "jobKey", label: "Key", cell: "string", editable: false},
            {name: "context", label: "Context", cell: "string", editable: false},
            {name: "status", label: "Status", cell: "string", editable: false}
        ];

        // grid
        var grid = new Backgrid.Grid({
            columns: columns,
            collection: this.data
        });
        $("#grid").html(grid.render().el);

        // paginator
        var paginator = new Backgrid.Extension.Paginator({
            collection: this.data
        });
        $("#paginator").html(paginator.render().el);

        // filter
        var filter = new Backgrid.Extension.ClientSideFilter({
            collection: this.data,
            fields: ['jobName']
        });
        $("#search").html(filter.render().el);

        this.data.fetch({reset: true});
        return this;
    }
});