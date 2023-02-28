$('#usernameAd, #passwordAd').on('keyup', function () {
    checkValidityAd();
});

const usernameAdRegEx = /^[A-z]{3,10}$/;
const passwordAdRegEx = /^[A-z0-9]{5}$/;

let adminValidations = [];
adminValidations.push({
    reg: usernameAdRegEx,
    field: $('#usernameAd'),
    error: 'username pattern is wrong.! ex: A-z 0-9'
});
adminValidations.push({
    reg: passwordAdRegEx,
    field: $('#passwordAd'),
    error: 'password pattern is wrong.! ex:0-9 5 digits'
});

function checkValidityAd() {
    for (let validation of adminValidations) {
        if (checkAd(validation.reg, validation.field)) {
            testSuccessAd(validation.field, "");
        } else {
            setErrorAd(validation.field, validation.error);
        }
    }
}

function checkAd(regex, textField) {
    let inputValue = textField.val();
    return regex.test(inputValue);
}

function testSuccessAd(textField, msg) {
    if (textField.val().length <= 0) {
        textField.css('border', '1px solid #ced4da');
        textField.parent().children('span').text("");
    } else {
        textField.css('border', '1px solid lightgreen');
        textField.parent().children('span').text(msg);
    }
}

function setErrorAd(textField, msg) {
    if (textField.val().length <= 0) {
        textField.css('border', '1px solid #ced4da');
        textField.parent().children('span').text("");
    } else {
        textField.css('border', '3px solid red');
        textField.parent().children('span').text(msg);
    }
}

//==============================
$('#adID, #adminName, #adPassword, #adContact').on('keyup', function () {
    checkValidityAd();
});


const usernameAdManageRegEx = /^[A-z]{3,10}$/;
const passwordAdManageRegEx = /^[A-z0-9]{5}$/;
const contactNumAdManageRegEx = /^(07)[01245678][0-9]{7}$/;

adminValidations.push({
    reg: usernameAdManageRegEx,
    field: $('#adminName'),
    error: 'username pattern is wrong.! ex: A-z 0-9'
});
adminValidations.push({
    reg: passwordAdManageRegEx,
    field: $('#adPassword'),
    error: 'password pattern is wrong.! ex: A-z 0-9 5 digits'
});
adminValidations.push({
    reg: contactNumAdManageRegEx,
    field: $('#adContact'),
    error: 'contact no pattern is wrong.! ex: 0771234567 10 digits'
});

//==================================================

function generateAdID() {
    $.ajax({
        url: baseURL + "admin/generate",
        method: "get",
        success: function (resp) {
            let id = resp.data;
            if (id == null) {
                $('#adID').val("A-001");
            } else {
                let idNo = parseInt(id.substr(2, 5)) + 1;
                console.log(idNo);
                $('#adID').val('A-' + idNo.toString().padStart(3, '0'));
            }
        },
        error: function (error) {
            let jsObject = JSON.parse(error.responseText);
            alert("error : " + jsObject.message);
        }
    });
}

$('#btnSave').click(function () {
    var admin = {
        adminID: $('#adID').val(),
        userName: $('#adminName').val(),
        password: $('#adPassword').val(),
        contact: $('#adContact').val()
    }

    $.ajax({
        url: baseURL + "admin",
        method: "post",
        contentType: "application/json",
        data: JSON.stringify(admin),
        success: function () {
            loadAllAdmins();
        },
        error: function (error) {
            let jsObject = JSON.parse(error.responseText);
            alert("error : " + jsObject.message);
        }
    });

});

loadAllAdmins();
$('#btnGetAll').click(function () {
    loadAllAdmins();
});

function loadAllAdmins() {
    $.ajax({
        url: baseURL + "admin",
        method: "get",
        dataType: "json",
        success: function (resp) {
            $('#tblAdminManage').empty();
            for (let ad of resp.data) {
                $('#tblAdminManage').append('<tr><td>' + ad.adminID + '</td><td>' + ad.userName + '</td><td>' + ad.password + '</td><td>' + ad.contact + '</td></tr>');
            }
            generateAdID();
            clearTextFields();
            bindRowClickEvent();
        },
        error: function (error) {
            let jsObject = JSON.parse(error.responseText);
            alert("error : " + jsObject.message);
        }
    });
}

function bindRowClickEvent() {
    $('#tblAdminManage > tr').click(function () {
        let id = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let password = $(this).children(":eq(2)").text();
        let contact = $(this).children(":eq(3)").text();

        $('#adID').val(id);
        $('#adminName').val(name);
        $('#adPassword').val(password);
        $('#adContact').val(contact);
    });
}

function clearTextFields() {
    $('#adminName').val("");
    $('#adPassword').val("");
    $('#adContact').val("");

    if ($('#adminName, #adPassword, #adContact').val().length <= 0) {
        $('#adminName, #adPassword, #adContact').css('border', '1px solid #ced4da');
        $('#adminName, #adPassword, #adContact').parent().children('span').text("");
    }
}


$('#btnUpdate').click(function () {
    var ad = {
        adminID: $('#adID').val(),
        userName: $('#adminName').val(),
        password: $('#adPassword').val(),
        contact: $('#adContact').val()
    }

    $.ajax({
        url: baseURL + "admin",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(ad),
        success: function () {
            loadAllAdmins();
            generateAdID();
            clearTextFields();
            bindRowClickEvent();
        },
        error: function (error) {
            let jsObject = JSON.parse(error.responseText);
            alert("error : " + jsObject.message);
        }

    });

});

$('#btnDelete').click(function () {
    var id = $('#adID').val();

    $.ajax({
        url: baseURL + "admin?id=" + id,
        method: "delete",
        dataType: "json",
        success: function () {
            loadAllAdmins();
        },
        error: function (error) {
            let jsObject = JSON.parse(error.responseText);
            alert("error : " + jsObject.message);
        }
    });
});

$('#adminLoginBtn').click(function () {
    var admUserName = $('#usernameAd').val();
    var admPwd = $('#passwordAd').val();

    $.ajax({
        url: baseURL + "admin?admUserName = " + admUserName,
        method: "get",
        success: function (resp) {
            console.log('pwd : ', resp.data);
            if(resp.data == admPwd) {
                $('#adminDash').css('display', 'block');
                $('.cusSignUp').css('display', 'none');
                $('.cusLogin').css('display', 'none');
                $('.adminLogin').css('display', 'none');
                $('.driverLogin').css('display', 'none');
                $('#main').css('display', 'none');
                $('#footer').css('display', 'flex');
            } else {
                alert('username or password is wrong..!');
            }
        },
        error: function (error){
            let jsObject = JSON.parse(error.responseText);
            alert("error : " + jsObject.message);
        }
    });
});

