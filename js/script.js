	$(document).ready(function(){
			$(document).on('click', 'td.edit', function () {
			    if ($("#editbox").length > 0) {
			      return false;
			    }
			    $('.ajax').html($('.ajax input').val());
			    $('.ajax').removeClass('ajax');

			    let tdClasses = $(this).attr('class').split(" ");
			    let fieldName = tdClasses[1];
			    let dataId = $(this).parent('tr').data('id');
			    $(this).addClass('ajax').html('<input data-id="'+dataId+'" data-fieldname="'+fieldName+'" class="form-control" id="editbox" size="' + $(this).text().length + '" type="text" value="' + $(this).text() +'" />');
			    $('#editbox').focus();
			});
			$(document).on('keydown', '#editbox', function (e) {
				if(e.which == 13)
	   			{
	   				var table = $(this).parents('table').data('table');
	   				let fieldName = $(this).data('fieldname');
	   				let dataId = $(this).data('id');
	   				$.ajax({ 
	   					type: "POST",
					 	url:"save.php",
					 	data: "value="+$(this).val()+"&id="+dataId+"&field="+fieldName+"&table="+table,
						success: function(data){
							$('.ajax').html($('.ajax input').val());
					 		$('.ajax').removeClass('ajax');
					 	}
					 });
	   			}
			});
				$(document).on('click', '.new', function () {
	   				$.ajax({ 
					 	url:"newrow.php",
				    });
				    location.reload();
			    });
		});