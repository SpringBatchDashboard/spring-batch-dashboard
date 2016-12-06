
/**
 LinkCell renders an HTML `<a>` anchor for the value and accepts URIs as user
 input values. No type conversion or URL validation is done by the formatter
 of this cell. Users who need URL validation are encourage to subclass LinkCell
 to take advantage of the parsing capabilities of the HTMLAnchorElement
 available on HTML5-capable browsers or using a third-party library like
 [URI.js](https://github.com/medialize/URI.js).

 @class Backgrid.LinkCell
 @extends Backgrid.Cell
 */
var LinkCell = Backgrid.LinkCell = Backgrid.Cell.extend({

	/** @property */
	className: "link-cell",

	/**
	 @property {string} [title] The title attribute of the generated anchor. It
	 uses the display value formatted by the `formatter.fromRaw` by default.
	 */
	title: null,

	/**
	 @property {string} [target="_blank"] The target attribute of the generated
	 anchor.
	 */
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