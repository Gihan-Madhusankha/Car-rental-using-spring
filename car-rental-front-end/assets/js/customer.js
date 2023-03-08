$('#btnCustomerLogin, #mem-log').click(function () {
    $('.cusLogin').css('display', 'block');
    $('#main').css('display', 'none');
    $('#footer').css('display', 'none');
    $('.cusSignUp').css('display', 'none');
    $('.driverLogin').css('display', 'none');
    $('.adminLogin').css('display', 'none');
    $('#adminDash').css('display', 'none');
    $('.booking-form').css('display', 'none');
});

$('#btnCusLogin').click(function () {
    $('.driverLogin').css('display', 'none');
    $('#main').css('display', 'none');
    $('#footer').css('display', 'none');
    $('.cusSignUp').css('display', 'none');
    $('.adminLogin').css('display', 'none');
    $('.cusLogin').css('display', 'none');
    $('#adminDash').css('display', 'none');
    $('.booking-form').css('display', 'block');
});

$('#btnDriverLogin').click(function () {
    $('.driverLogin').css('display', 'block');
    $('#main').css('display', 'none');
    $('#footer').css('display', 'none');
    $('.cusSignUp').css('display', 'none');
    $('.adminLogin').css('display', 'none');
    $('.cusLogin').css('display', 'none');
    $('#adminDash').css('display', 'none');
    $('.booking-form').css('display', 'none');
});

$('#btnAdminLogin').click(function () {
    $('.adminLogin').css('display', 'block');
    $('#main').css('display', 'none');
    $('#footer').css('display', 'none');
    $('.cusSignUp').css('display', 'none');
    $('.cusLogin').css('display', 'none');
    $('.driverLogin').css('display', 'none');
    $('#adminDash').css('display', 'none');
    $('.booking-form').css('display', 'none');
});


$('#customerSignUp, #mem-sign').click(function () {
    $('.cusSignUp').css('display', 'block');
    $('#main').css('display', 'none');
    $('#footer').css('display', 'none');
    $('.cusLogin').css('display', 'none');
    $('.driverLogin').css('display', 'none');
    $('.adminLogin').css('display', 'none');
});

$('#cusSignUpCancel, .btnBack').click(function () {
    $('.cusSignUp').css('display', 'none');
    $('.cusLogin').css('display', 'none');
    $('.adminLogin').css('display', 'none');
    $('.driverLogin').css('display', 'none');
    $('#main').css('display', 'block');
    $('#footer').css('display', 'flex');
    $('#adminDash').css('display', 'none');
    $('.booking-form').css('display', 'none');
});

// $('#adminLoginBtn').click(function () {
//     $('#adminDash').css('display', 'block');
//     $('.cusSignUp').css('display', 'none');
//     $('.cusLogin').css('display', 'none');
//     $('.adminLogin').css('display', 'none');
//     $('.driverLogin').css('display', 'none');
//     $('#main').css('display', 'none');
//     $('#footer').css('display', 'flex');
// });


var baseURL = "http://localhost:8080/car_rental/";

$('#btnRegister').click(function () {
    var sample = "sample";
    $.ajax({
        url: baseURL + "user?sample=" + sample,
        method: "get",
        // data: "json",
        success: function (resp) {
            var uID = 'C-001';
            for (let i = 0; i < resp.data.length; i++) {
                if ('C' == resp.data[i].substr(0, 1)) {
                    console.log(resp.data[0].substr(0, 1));
                    var a = parseInt(resp.data[i].substr(2, 5)) + 1;
                    uID = 'C-' + a.toString().padStart(3, '0');
                    break;
                }
            }
            var user = {
                userID: uID,
                userName: $('#inputUserName').val(),
                password: $('#inputPasswordCus').val()
            }
            saveUser(user);
        },
        error: function (error) {
            console.log("error : ", error.message);
        }
    });
});

function saveUser(user) {
    $.ajax({
        url: baseURL + "user",
        method: "post",
        contentType: "application/json",
        data: JSON.stringify(user),
        // dataType: "json",
        success: function (resp) {
            alert("success : " + resp.message);
            saveCus(user.userID, user.userName, user.password);
        },
        error: function (error) {
            let jsObject = JSON.parse(error.responseText);
            alert("error : " + jsObject.message);
        }
    });
}

function saveCus(a, b, c) {
    let yourImage = $("#yourImage")[0].files[0].name;
    let identityCardImage = $("#identityCardImage")[0].files[0].name;
    let licenseImage = $("#licenseImage")[0].files[0].name;

    console.log(yourImage, identityCardImage, licenseImage);

    var customer = {
        customerID: a,
        userName: b,
        password: c,
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

    let d = JSON.stringify(customer);
    console.log("Customer : ", customer);

    $.ajax({
        url: baseURL + "customer",
        method: "post",
        contentType: "application/json",
        data: JSON.stringify(customer),
        // dataType: "json",
        success: function (resp) {
            alert("success : " + resp.message);
        },
        error: function (error) {
            let jsObject = JSON.parse(error.responseText);
            alert("error : " + jsObject.message);
        }
    });
}

// customer sign up form regex
$('#inputUserName, #inputPasswordCus, #cusFullName, #cusAddress, #cusContactNum, #cusEmail,#cusNICNo, #cusLicenseNum').on('keyup', function () {
    checkValidity();
});

const inputUserNameRegEx = /^[A-z]{3,10}$/;
const inputPasswordCusRegEx = /^[A-z0-9]{5}$/;
const cusFullNameRegEx = /^[A-z .]{5,}$/;
const cusAddressRegEx = /^[0-9/A-z. ,]{5,}$/;
const cusContactNumRegEx = /^(07)[01245678][0-9]{7}$/;
const cusEmailRegEx = /^[a-z0-9]{3,}(@gmail.com)$/;
const cusNICNoRegEx = /^[0-9]{9}(v)$/;
const cusLicenseNumRegEx = /^(B)[0-9]{7}$/;

let customerSignUpValidations = [];

let c = {
    reg: inputUserNameRegEx,
    field: $('#inputUserName'),
    error: 'user name pattern is wrong.! ex: A-z 0-9'
}
customerSignUpValidations.push(c);
customerSignUpValidations.push({
    reg: inputPasswordCusRegEx,
    field: $('#inputPasswordCus'),
    error: 'password pattern is wrong.! ex:A-z 0-9 5 digits'
});

customerSignUpValidations.push({
    reg: cusFullNameRegEx,
    field: $('#cusFullName'),
    error: 'full name pattern is wrong.! ex: A-z'
});

customerSignUpValidations.push({
    reg: cusAddressRegEx,
    field: $('#cusAddress'),
    error: 'address pattern is wrong.! ex: 0-9 A-z,. /'
});

customerSignUpValidations.push({
    reg: cusContactNumRegEx,
    field: $('#cusContactNum'),
    error: 'contact pattern no is wrong.! ex: 0-9'
});

customerSignUpValidations.push({
    reg: cusEmailRegEx,
    field: $('#cusEmail'),
    error: 'email pattern is wrong.! ex: A-z 0-9'
});

customerSignUpValidations.push({
    reg: cusNICNoRegEx,
    field: $('#cusNICNo'),
    error: 'nic no pattern is wrong.! ex: 0-9 10 digits'
});

customerSignUpValidations.push({
    reg: cusLicenseNumRegEx,
    field: $('#cusLicenseNum'),
    error: 'license no pattern is wrong.! ex: B(0-9 7digits)'
});

function checkValidity() {
    for (let validation of customerSignUpValidations) {
        if (check(validation.reg, validation.field)) {
            testSuccess(validation.field, "");
        } else {
            setError(validation.field, validation.error);
        }
    }
    for (let validation of customerLoginValidations) {
        if (check(validation.reg, validation.field)) {
            testSuccess(validation.field, "");
        } else {
            setError(validation.field, validation.error);
        }
    }
}

function check(regex, textField) {
    let inputValue = textField.val();
    // console.log(regex.test(inputValue));
    return regex.test(inputValue);
}

function testSuccess(textField, msg) {
    if (textField.val().length <= 0) {
        textField.css('border', '1px solid #ced4da');
        textField.parent().children('span').text("");
    } else {
        textField.css('border', '1px solid lightgreen');
        textField.parent().children('span').text(msg);
    }
}

function setError(textField, msg) {
    if (textField.val().length <= 0) {
        textField.css('border', '1px solid #ced4da');
        textField.parent().children('span').text("");
    } else {
        textField.css('border', '3px solid red');
        textField.parent().children('span').text(msg);
    }
}


// customer login
$('#btnCusLogin').click(function () {
    var username = $('#usernameCus').val();
    $.ajax({
        url: baseURL + "customer?username=" + username,
        method: "get",
        success: function (resp) {
            console.log(resp.data);
            console.log('c',resp.data.contact);
            console.log('e',resp.data.email);
            if ($('#passwordCus').val() === resp.data) {
                console.log('password', resp.data);
                setCusDetailsOfBooking(username);

            } else {
                alert('username or password is wrong...');
            }
        },
        error: function (error) {
            console.log(error.message);
        }
    });
});

function setCusDetailsOfBooking(username){

}


$('#usernameCus, #passwordCus').on('keyup', function () {
    checkValidity();
});

const usernameCusRegEx = /^[A-z]{3,10}$/;
const passwordCusRegEx = /^[A-z0-9]{5}$/;

let customerLoginValidations = [];
customerLoginValidations.push({
    reg: usernameCusRegEx,
    field: $('#usernameCus'),
    error: 'username pattern is wrong.! ex: A-z 0-9'
});
customerLoginValidations.push({
    reg: passwordCusRegEx,
    field: $('#passwordCus'),
    error: 'password pattern is wrong.! ex:A-z 0-9 5 digits'
});

loadAllCustomers();

function loadAllCustomers() {
    $.ajax({
        url: baseURL + "customer",
        method: "get",
        dataType: "json",
        success: function (resp) {
            for (let cus of resp.data) {
                $('#tblCustomer').append(`<tr><td>${cus.customerID}</td><td>${cus.fullName}</td><td>${cus.address}</td><td>${cus.email}</td><td>${cus.contact}</td><td>${cus.nicNo}</td></tr>`);
            }
        },
        error: function (error) {
            let jsObject = JSON.parse(error.responseText);
            alert("error : " + jsObject.message);
        }
    });
}