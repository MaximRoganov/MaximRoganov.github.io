(function($){
    $(function(){
        //alert('success');
        $('.inp_submt').on('click', function(){
            var num = $(this).parents('form').find('.inp_num').val();
            var text = $(this).parents('form').find('.inp_name').val();
			var email = $(this).parents('form').find('.inp_email').val();
            var phone = $(this).parents('form').find('.inp_phone').val();
            var theme = $(this).parents('form').find('.inp_theme').val();
            var pop1 = '.popup'+num;
            var pop2 = '.overlay'+num;
            if(phone.length != 0){
                $(this).parents('form').find('.inp_name').css('border-color', '#E4E4E4');
                var data = {name: text, phone: phone, email: email, theme: theme};
                var allData = JSON.stringify(data);
                $.post(
                    './sendform.php',
                    {'data': allData},
                    function(data){
                        if(data == 'Success'){


							$('form').trigger('reset');
							$('form').find('.inp_phone').css('border', '1px solid #ECECEC');
							$.arcticmodal('close');
                            $('#modal2').arcticmodal()
							
                        }
                    }
                );
                return false;
            }else{
                $(this).parents('form').find('.inp_phone').css('border', '1px solid red');
                return false;
            }
        });

    })
})(jQuery);