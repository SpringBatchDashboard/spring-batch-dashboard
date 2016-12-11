define(['underscore',
        'backbone',
        'backgrid',
        'jobs.collection',
        'backgrid.filter',
        'backgrid.paginator',
        'backgrid.link.cell'],

    function (_, Backbone, Backgrid, JobsCollection) {
        console.log('JobsView.js loaded');

        var JobsView = Backbone.View.extend({

            initialize: function (options) {
                console.log('JobsView initialized');
            },

            render: function () {

                var columns = [
                    {name: "name", label: "Name", cell: "string", editable: false},
                    {
                        name: "executionCount", label: "Execution Count", cell: "link", editable: false,
                        formatter: _.extend({}, Backgrid.SelectFormatter.prototype, {
                            fromRaw: function (rawValue, model) {
                                var href = model.get("_links").findAllByJobNameOrderByIdDesc.href;
                                return "#instances?" + model.get("name");
                            }
                        })
                    },
                    {name: "description", label: "Description", cell: "string", editable: false}
                ];

                var jobsCollection = new JobsCollection();

                // grid
                var grid = new Backgrid.Grid({
                    columns: columns,
                    collection: jobsCollection
                });
                $("#grid").html(grid.render().el);


                // search
                var filter = new Backgrid.Extension.ClientSideFilter({
                    collection: jobsCollection,
                    fields: ['name']
                });
                $("#search").html(filter.render().el);

                // paginator
                var paginator = new Backgrid.Extension.Paginator({
                    collection: jobsCollection
                });
                $("#paginator").html(paginator.render().el);

                jobsCollection.fetch({reset: true});

                return this;
            }
        });

        return JobsView;
    }
)