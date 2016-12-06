/*
 * TITLE: StatusFormatterCell
 *
 * Extend the Backgrid Cell so that it formats status cells appropriately.
 * Formatting is based on the model value of the given cell.
 */

var StatusFormatterCell = Backgrid.Cell.extend({
	render: function() {
		this.$el.empty();
		
		var _status = this.model.get(this.column.attributes.name);
		var _class = "status ";
		
		// Set an additional class name to the cell based on the status.
		switch(_status.toUpperCase()) {
			case "SENT":
			case "ON":
			case "LIVE":
				_class = "good";
				break;
				
			case "HALTED":
			case "CANCELLED":
				_class = "bad";
				break;
				
			case "UNSCHEDULED":
			case "OFF":
				_class = "really-bad";
				break;
				
			case "DISABLED":
			case "DRAFT":
				_class = "disabled";
				break;
				
			case "NOTGENERATED":
				_class = "medium";
				break;
			default:
				break;
		}
		
		var _html = '<p class="' + _class + '">' + _status + '</p>';
		this.$el.html(_html);
		
		return this;
	}
});


/*
 * TITLE: ImageCell
 *
 * Extend the Backgrid Cell so that it inserts an image into the table cell.
 * Model data should contain the URI of the image.
 */

var ImageCell = Backgrid.Cell.extend({
	render: function() {
		this.$el.empty();
		
		var _html = '';
		var _url = this.model.get(this.column.attributes.name);
		
		// Only display the image tag if the image URL exists.
		if (_url) {
			// Get the class from the column object, if it exists.
			var _class = this.column.attributes.class || '';
			
			// Create the image tag for this cell.
			_html = '<img src="' + _url + '" class="' + _class + '" />';
		}
		
		this.$el.html(_html);
		return this;
	}
});


/*
 * TITLE: BooleanCell
 *
 * Extend the Backgrid Cell so that it replaces a boolean model property value with either "yes" or "no".
 * Model data should (obviously) be a boolean value.
 */

var BooleanCell = Backgrid.Cell.extend({
	render: function() {
		this.$el.empty();
		
		var _value = this.model.get(this.column.attributes.name);
		var _html = (_value === true) ? 'Yes' : 'No';
		
		this.$el.html(_html);
		return this;
	}
});