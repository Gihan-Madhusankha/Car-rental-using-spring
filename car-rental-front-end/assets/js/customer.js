$('#btnCustomerLogin').click(function () {
    $('.cusLogin').css('display', 'block');
    $('#main').css('display', 'none');
    $('#footer').css('display', 'none');
    $('.cusSignUp').css('display', 'none');
    $('.driverLogin').css('display', 'none');
    $('.adminLogin').css('display', 'none');
    $('#adminDash').css('display', 'none');
});

$('#btnDriverLogin').click(function () {
    $('.driverLogin').css('display', 'block');
    $('#main').css('display', 'none');
    $('#footer').css('display', 'none');
    $('.cusSignUp').css('display', 'none');
    $('.adminLogin').css('display', 'none');
    $('.cusLogin').css('display', 'none');
    $('#adminDash').css('display', 'none');
});

$('#btnAdminLogin').click(function () {
    $('.adminLogin').css('display', 'block');
    $('#main').css('display', 'none');
    $('#footer').css('display', 'none');
    $('.cusSignUp').css('display', 'none');
    $('.cusLogin').css('display', 'none');
    $('.driverLogin').css('display', 'none');
    $('#adminDash').css('display', 'none');
});


$('#customerSignUp').click(function () {
    $('.cusSignUp').css('display', 'block');
    $('#main').css('display', 'none');
    $('#footer').css('display', 'none');
    $('.cusLogin').css('display', 'none');
    $('.driverLogin').css('display', 'none');
    $('.adminLogin').css('display', 'none');
    $('#adminDash').css('display', 'none');
});

$('#cusSignUpCancel, .btnBack').click(function () {
    $('.cusSignUp').css('display', 'none');
    $('.cusLogin').css('display', 'none');
    $('.adminLogin').css('display', 'none');
    $('.driverLogin').css('display', 'none');
    $('#main').css('display', 'block');
    $('#footer').css('display', 'flex');
    $('#adminDash').css('display', 'none');
});

$('#adminLoginBtn').click(function () {
    $('#adminDash').css('display', 'block');
    $('.cusSignUp').css('display', 'none');
    $('.cusLogin').css('display', 'none');
    $('.adminLogin').css('display', 'none');
    $('.driverLogin').css('display', 'none');
    $('#main').css('display', 'none');
    $('#footer').css('display', 'flex');
});



$('#btnRegister').click(function (){
    let formData = $('#customerSignUpForm').serialize();

    $.ajax({

    });
});
