$(function(){
		$( "#accordion" ).accordion({
		collapsible: true,
		active: false
		}); 
	});

$(function(){
	$("#open").button().click(function(){
		$('#dialog').dialog("open");
	})

	$('#dialog').dialog({
	autoOpen: false,
	buttons:{
			Оформить: function (event, ui) {
					$( "#confirm" ).dialog("open");

					var n = $("#name").val();
					var kg = $("#weight").val();
					var m = $("#meat").val();
					var d = $("#date").val();
					var t = $("#town").val();
					var s = $("#street").val();
					var p = $("#promocod").val();
					var meat_price, price;

					switch (m){
						case 'Свинина': meat_price = 340;
						break;
						case 'Говядина': meat_price = 250;
						break;
						case 'Курица': meat_price = 180;
						break;
					}

					price = kg*meat_price;
					document.getElementById('cN').value = n;
					document.getElementById('Kg').value = kg;
					document.getElementById('M').value = m;
					document.getElementById('D').value = d;
					document.getElementById('T').value = t;
					document.getElementById('S').value = s;
					document.getElementById('P').value = p;
					document.getElementById('Price').value = price;

				},
			Закрыть: function() {
			$(this).dialog('close');
	}
},
	show: {effect: "slideDown", duration: 800},
	hide: {effect: "slideUp", duration: 800},
});

$("#slider").slider({
	range: "min",
	value: 0,
	min: 1,
	max: 32,
	step: 1,
	slide: function(event, ui) {
		$("#weight").val($("#slider").slider("option", "value"));
	},
	change: function(event, ui) { 
		$("#weight").val($("#slider").slider("option", "value"));
	}
});
$("#weight").val($("#slider").slider("option", "value"));

$( "#date" ).datepicker({
	dateFormat: "dd.mm.yy"
	});

$("#tip").tooltip();

var availableTags = [
		"Уфа",
		"Москва",
		"Санкт-Петербург",
		"Челябинск",
		"Нижний-Новгород",
		"Смоленск",
		"Сочи",
		"Краснодар",
		"Учалы",
		"Самара",
		];
		$( "#town" ).autocomplete({
		source: availableTags
		});

	$('#confirm').dialog({

	autoOpen: false,
	buttons:{
			Подтвердить: function (event, ui) {
				$( "#succ" ).dialog("open");
				$( "#dialog" ).dialog("close")
				$(this).dialog('close');
				},
			Отмена: function() {
			$(this).dialog('close');
	}
},
	show: {effect: "slideDown", duration: 800},
	hide: {effect: "slideUp", duration: 800},
});

$('#succ').dialog({
	autoOpen: false,
	show: {effect: "slideDown", duration: 800},
	hide: {effect: "slideUp", duration: 800},
});
}) 


