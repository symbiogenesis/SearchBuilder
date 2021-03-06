/*! Foundation ui integration for DataTables' SearchBuilder
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
		define(['jquery', 'datatables.net-zf', 'datatables.net-searchbuilder'], function($) {
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
				$ = require('datatables.net-zf')(root, $).$;
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
	clearAll: 'button secondary dtsb-clearAll'
});

$.extend(true, DataTable.Group.classes, {
	add: 'button secondary dtsb-add',
	clearGroup: 'button secondary dtsb-clearGroup',
	logic: 'button secondary dtsb-logic',
});

$.extend(true, DataTable.Criteria.classes, {
	condition: 'form-control dtsb-condition',
	data: 'form-control dtsb-data',
	delete: 'button secondary dtsb-delete',
	left: 'button secondary dtsb-left',
	right: 'button secondary dtsb-right',
	value: 'form-control dtsb-value',
});

return DataTable.searchPanes;
}));
