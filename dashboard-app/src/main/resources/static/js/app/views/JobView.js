DashboardApp.Views.JobView = Backbone.View.extend({

    initialize: function (options) {
    },

    render: function () {

        var columns = [
            {name: "name", label: "Name", cell: "string", editable: false, editable: false,formatter :
				_.extend({}, Backgrid.SelectFormatter.prototype, {
					fromRaw: function (rawValue, model) {
					    var href = model.get("_links").self.href;
						return formatter;
					}
				})},
            {name: "executionCount", label: "Execution Count", cell: "string", editable: false},
            {name: "_links", label: "Details", cell: "string"},
            {name: "_links.findAllByJobNameOrderByIdDesc.href", label: "Instances", cell: "string", editable: false}
        ];

        var jobs = new DashboardApp.Collections.JobCollection();

        // grid
        var grid = new Backgrid.Grid({
            columns: columns,
            collection: jobs
        });
        $("#grid").html(grid.render().el);


        // search
        var filter = new Backgrid.Extension.ClientSideFilter({
            collection: jobs,
            fields: ['name']
        });
        $("#search").html(filter.render().el);

        // paginator
        var paginator = new Backgrid.Extension.Paginator({
            collection: jobs
        });
        $("#paginator").html(paginator.render().el);

        jobs.fetch({reset: true});

        return this;
    }
});