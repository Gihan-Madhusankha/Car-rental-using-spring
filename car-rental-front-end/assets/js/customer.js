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
    // let formData = $('#customerSignUpForm').serialize();
    // console.log(formData);
    let yourImage = $("#yourImage")[0].files[0].name;
    let identityCardImage = $("#identityCardImage")[0].files[0].name;
    let licenseImage = $("#licenseImage")[0].files[0].name;

    console.log(yourImage, identityCardImage, licenseImage);

    var customer = {
        userName: $('#inputUserName').val(),
        password: $('#inputPasswordCus').val(),
        fullName: $('#cusFullName').val(),
        address: $('#cusAddress').val(),
        contact: $('#cusContactNum').val(),
        email: $('#cusEmail').val(),
        nicNo: $('#cusNICNo').val(),
        licenseNo: $('#cusLicenseNum').val(),
        customerImage: yourImage,
        nicImage: identityCardImage,
        licenseImage: licenseImage
    };

    let c = JSON.stringify(customer);
    console.log("Customer : ", customer);

    $.ajax({
        url: baseURL + "customer",
        method: "post",
        contentType: "application/json",
        data: c,
        // dataType: "json",
        success: function (resp) {
            alert(resp.message);
        },
        error: function (error) {
            let jsObject = JSON.parse(error.responseText);
            alert(jsObject);
        }
    });
});

// customer sign up form regex
const inputUserNameRegEx = /^[A-z ]{3,10}$/;
const inputPasswordCusRegEx = /^[A-z0-9]{5}$/;
const cusFullNameRegEx = /^[A-z ]{5,}$/;
const cusAddressRegEx = /^[0-9/A-z. ,]{5,}$/;
const cusContactNumRegEx = /^[0-9]{10}$/;
const cusEmailRegEx = /^[a-z0-9]{1,}(@gmail.com)$/;
const cusNICNoRegEx = /^[0-9]{9}$/;
const cusLicenseNumRegEx = /^(B)[0-9]{7}$/;

let customerSignUpValidations = [];

let c = {
    reg: inputUserNameRegEx,
    field: $('#inputUserName'),
    error: 'user name is wrong.! ex: A-z 0-9'
}
customerSignUpValidations.push(c);
customerSignUpValidations.push({
    reg: inputPasswordCusRegEx,
    field: $('#inputPasswordCus'),
    error: 'user name is wrong.! ex:0-9 5 digits'
});

customerSignUpValidations.push({
    reg: cusFullNameRegEx,
    field: $('#cusFullName'),
    error: 'user name is wrong.! ex: A-z'
});

customerSignUpValidations.push({
    reg: cusAddressRegEx,
    field: $('#cusAddress'),
    error: 'user name is wrong.! ex: 0-9 A-z,. /'
});

customerSignUpValidations.push({
    reg: cusContactNumRegEx,
    field: $('#cusContactNum'),
    error: 'user name is wrong.! ex: 0-9'
});

customerSignUpValidations.push({
    reg: cusEmailRegEx,
    field: $('#cusEmail'),
    error: 'user name is wrong.! ex: A-z 0-9'
});

customerSignUpValidations.push({
    reg: cusNICNoRegEx,
    field: $('#cusNICNo'),
    error: 'user name is wrong.! ex: 0-9 10 digits'
});

customerSignUpValidations.push({
    reg: cusLicenseNumRegEx,
    field: $('#cusLicenseNum'),
    error: 'user name is wrong.! ex: B(0-9 7digits)'
});



function checkValidity(){
    for (let cusValidation of customerSignUpValidations) {
        if (check(cusValidation.reg, cusValidation.field)){
            testSuccess(cusValidation.field, "");
        }else {
            setError(cusValidation.field, cusValidation.error());
        }
    }
}

function check(regex, textField){
    let inputValue = textField.val();
    return regex.test(inputValue);
}

function testSuccess(textField, msg){
    if (textField.val()<=0){
        textField.css('border', '1px solid #ced4da');
        textField.parent().children('span').text("");
    } else {
        textField.css('border', '3px solid lightgreen');
        textField.parent().children('span').text(msg);
    }

}

function setError(textField, msg){
    if (textField.val().length <= 0) {
        textField.css('border', '1px solid #ced4da');
        textField.parent().children('span').text("");
    } else {
        textField.css('border', '3px solid red');
        textField.parent().children('span').text(msg);
    }
}