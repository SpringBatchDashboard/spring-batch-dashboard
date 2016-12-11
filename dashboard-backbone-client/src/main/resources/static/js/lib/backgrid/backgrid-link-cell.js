define(['backgrid'],

    function (Backgrid) {
        var LinkCell = Backgrid.LinkCell = Backgrid.Cell.extend({

            className: "link-cell",

            title: null,

            target: "_blank",

            initialize: function (options) {
                LinkCell.__super__.initialize.apply(this, arguments);
                this.title = options.title || this.title;
                this.target = options.target || this.target;
            },

            render: function () {
                this.$el.empty();
                var rawValue = this.model.get(this.column.get("name"));
                var formattedValue = this.formatter.fromRaw(rawValue, this.model);
                this.$el.append($("<a>", {
                    tabIndex: -1,
                    href: formattedValue,
                    title: this.title || formattedValue
                }).text(rawValue));
                this.delegateEvents();
                return this;
            }

        });

        return LinkCell;
    }
);
