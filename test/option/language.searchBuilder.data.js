describe('searchBuilder - options - language.searchBuilder.data', function() {
	let table;

	dt.libs({
		js: ['jquery', 'datatables', 'searchbuilder'],
		css: ['datatables', 'searchbuilder']
	});

	describe('Functional tests', function() {
		dt.html('basic');
		it('Default', function() {
			table = $('#example').DataTable({
				dom: 'Qlfrtip'
			});

			$('.dtsb-add').click();
			expect($('.dtsb-data option:selected').text()).toBe('Data');
		});

		dt.html('basic');
		it('Modified', function() {
			table = $('#example').DataTable({
				dom: 'Qlfrtip',
				language: {
					searchBuilder: {
						data: 'unit test'
					}
				}
			});

			$('.dtsb-add').click();
			expect($('.dtsb-data option:selected').text()).toBe('unit test');
		});
	});
});
