var DashboardApp = {

    Views: {},
    Models: {},
    Collections: {},
    Router: {}
}

$(document).ready(function(){
    DashboardApp.Router.Instance = new DashboardApp.Router();
    Backbone.history.start();
});