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


var baseURL = "http://localhost:8080/car_rental/";

$('#btnRegister').click(function () {
    let formData = $('#customerSignUpForm').serialize();
    console.log(formData);
    // let yourImage = $("#yourImage")[0].files[0].name;
    // let identityCardImage = $("#identityCardImage")[0].files[0].name;
    // let licenseImage = $("#licenseImage")[0].files[0].name;
    //
    // console.log(yourImage, identityCardImage, licenseImage);

    var customer = {
        userName: $('#inputUserName').val(),
        password: $('#inputPasswordCus').val(),
        fullName: $('#cusFullName').val(),
        address: $('#cusAddress').val(),
        contact: $('#cusContactNum').val(),
        email: $('#cusEmail').val(),
        nicNo: $('#cusNICNum').val(),
        licenseNo: $('#cusLicenseNum').val(),
        customerImage: null,
        nicImage: null,
        licenseImage: null
    };

    // let c = JSON.stringify(customer);
    console.log("Customer : ", customer);

    $.ajax({
        url: baseURL + "customer",
        method: "post",
        data: formData,
        dataType: "json",
        success: function (resp) {
            alert(resp.message);
        },
        error: function (error) {
            let jsObject = JSON.parse(error.responseText);
            alert(jsObject);
        }
    });
});
