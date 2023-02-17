$('#btnCustomerLogin').click(function (){
    $('.cusLogin').css('display', 'block');
    $('#main').css('display', 'none');
    $('#footer').css('display', 'none');
});



$('#customerSignUp').click(function () {
    $('.cusSignUp').css('display', 'block');
    $('#main').css('display', 'none');
    $('#footer').css('display', 'none');
});

$('#cusSignUpCancel').click(function(){
    $('.cusSignUp').css('display', 'none');
    $('#main').css('display', 'block');
    $('#footer').css('display', 'block');
});