/*! semantic ui integration for DataTables' SearchBuilder
 * ©2016 SpryMedia Ltd - datatables.net/license
 */
// Hack to allow TypeScript to compile our UMD
declare var define: {
	(string, Function): any;
	amd: string;
};
(function(factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery', 'datatables.net-se', 'datatables.net-searchbuilder'], function($) {
			return factory($, window, document);
		});
	}
	else if (typeof exports === 'object') {
		// CommonJS
		module.exports = function(root, $) {
			if (! root) {
				root = window;
			}

			if (! $ || ! $.fn.dataTable) {
				$ = require('datatables.net-se')(root, $).$;
			}

			if (! $.fn.dataTable.searchBuilder) {
				require('datatables.net-searchbuilder')(root, $);
			}

			return factory($, root, root.document);
		};
	}
	else {
		// Browser
		factory(jQuery, window, document);
	}
}(function($, window, document) {
'use strict';
let DataTable = $.fn.dataTable;

$.extend(true, DataTable.SearchBuilder.classes, {
	clearAll: 'ui button dtsb-clearAll'
});

$.extend(true, DataTable.Group.classes, {
	add: 'ui button dtsb-add',
	logic: 'ui button dtsb-logic',
	clearGroup: 'ui button dtsb-clearGroup'
});

$.extend(true, DataTable.Criteria.classes, {
	condition: 'ui selection dropdown dtsb-condition',
	delete: 'ui button dtsb-delete',
	field: 'ui selection dropdown dtsb-field',
	left: 'ui button dtsb-left',
	right: 'ui button dtsb-right',
	value: 'ui selection dropdown dtsb-value',
});

return DataTable.searchPanes;
}));