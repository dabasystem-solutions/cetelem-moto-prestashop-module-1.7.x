$(document).ready(function () {
	$('#CETELEM_CAMPAIGN_DATE_LIMIT').addClass('campaign_depending');
	if ($('#CETELEM_DISPLAY_CALC_off').is(':checked'))
	{
		depending_classes('calc_depending');
	}
	if ($('#CETELEM_CAMPAIGN_ON_off').is(':checked'))
	{
		depending_classes('campaign_depending');
	}
//    $(document).on('click', '#configuration_form_submit_btn', function (e) {
//        e.preventDefault();
//        $('#configuration_form').submit();
//        $('#configuration_form_1').submit();
//        $('#configuration_form_2').submit();
//    });
//    
//    $(document).on('click', '#configuration_form_submit_btn_1', function (e) {
//        e.preventDefault();
//        $('#configuration_form').submit();
//        $('#configuration_form_1').submit();
//        $('#configuration_form_2').submit();
//    });
//    
//    $(document).on('click', '#configuration_form_submit_btn_2', function (e) {
//        e.preventDefault();
//        $('#configuration_form').submit();
//        $('#configuration_form_1').submit();
//        $('#configuration_form_2').submit();
//    });
		
		$(document).on('click', 'input[name=CETELEM_DISPLAY_CALC]', function (e) {

			//console.log($('#CETELEM_DISPLAY_CALC_off').is(':checked'));
			depending_classes('calc_depending');
			//$('#CETELEM_DISPLAY_CALC_off').val().toggle();
			//$('input[name=CETELEM_DISPLAY_CALC]').prop('checked', false);
		});
		$(document).on('click', 'input[name=CETELEM_CAMPAIGN_ON]', function (e) {

			//console.log($('#CETELEM_DISPLAY_CALC_off').is(':checked'));
			depending_classes('campaign_depending');
			//$('#CETELEM_DISPLAY_CALC_off').val().toggle();
			//$('input[name=CETELEM_DISPLAY_CALC]').prop('checked', false);
		});

});

function depending_classes(depending_class)
{
	depending_class = '.'+depending_class;
	//if ($('#CETELEM_DISPLAY_CALC_off').is(':checked'))
	//{
		$(depending_class).parents('.form-group').toggle();
	//}
}