require.config({
        // enforceDefine: true,

        baseUrl: '/js/',

        paths: {
            'backbone': 'lib/backbone/backbone-min',
            'backbone.paginator': 'lib/backbone/backbone.paginator',
            'backgrid': 'lib/backgrid/backgrid',
            'backgrid.cell.extensions': 'lib/backgrid/backgrid-cell-extensions',
            'backgrid.filter': 'lib/backgrid/backgrid-filter.min',
            'backgrid.paginator': 'lib/backgrid/backgrid-paginator',
            'backgrid.link.cell': 'lib/backgrid/backgrid-link-cell',
            'bootstrap': 'lib/bootstrap/bootstrap.min',
            'jquery': 'lib/jquery/jquery',
            'tether': 'lib/tether/tether.min',
            'underscore': 'lib/underscore/underscore-min',

            // router
            'router': 'Router',

            // models
            'jobs.model': 'app/models/JobsModel',
            'instances.model' : 'app/models/InstancesModel',

            // views
            'jobs.view': 'app/views/JobsView',
            'instances.view' : 'app/views/InstancesView',

            //collections
            'jobs.collection': 'app/collections/JobsCollection',
            'instances.collection': 'app/collections/InstancesCollection',
        }
    }
);

require(['tether'], function(Tether) {
    window.Tether = Tether;
});

require(['backbone', 'router', 'underscore', 'jquery', 'bootstrap'],

    function (Backbone, Router) {

        console.log('Main.js loaded');

        new Router();
        Backbone.history.start();
    }
);

