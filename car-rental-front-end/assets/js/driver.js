$('#usernameDr, #passwordDr').on('keyup', function () {
    checkValidityDr();
});

const usernameDrRegEx = /^[A-z]{3,10}$/;
const passwordDrRegEx = /^[A-z0-9]{5}$/;

let driverLoginValidations = [];
driverLoginValidations.push({
    reg: usernameDrRegEx,
    field: $('#usernameDr'),
    error: 'username pattern is wrong.! ex: A-z 0-9'
});
driverLoginValidations.push({
    reg: passwordDrRegEx,
    field: $('#passwordDr'),
    error: 'password pattern is wrong.! ex:A-z 0-9 5 digits'
});

function checkValidityDr() {
    for (let validation of driverLoginValidations) {
        if (checkDr(validation.reg, validation.field)) {
            testSuccessDr(validation.field, "");
        } else {
            setErrorDr(validation.field, validation.error);
        }
    }
    // for (let validation of driverValidations) {
    //     if (checkDr(validation.reg, validation.field)) {
    //         testSuccessDr(validation.field, "");
    //     } else {
    //         setErrorDr(validation.field, validation.error);
    //     }
    // }
}

function checkDr(regex, textField) {
    let inputValue = textField.val();
    return regex.test(inputValue);
}

function testSuccessDr(textField, msg) {
    if (textField.val().length <= 0) {
        textField.css('border', '1px solid #ced4da');
        textField.parent().children('span').text("");
    } else {
        textField.css('border', '1px solid lightgreen');
        textField.parent().children('span').text(msg);
    }
}

function setErrorDr(textField, msg) {
    if (textField.val().length <= 0) {
        textField.css('border', '1px solid #ced4da');
        textField.parent().children('span').text("");
    } else {
        textField.css('border', '3px solid red');
        textField.parent().children('span').text(msg);
    }
}

//=============================================================

/*$('#adUserName, #adPassword1, #driverId, #driverName, #driverAddress, #driverAge, #driverContact, #driverReleaseOrNot').on('keyup', function () {
    checkValidityDr();
});

const usernameAdRegEx = /^[A-z]{3,10}$/;
const passwordAdRegEx = /^[A-z0-9]{5}$/;
const driverNameRegEx = /^[A-z .]{5,}$/;
const driverAddressRegEx = /^[0-9/A-z. ,]{5,}$/;
const driverAgeRegEx = /^[1-9][0-9]$/;
const driverContactNumRegEx = /^(07)[01245678][0-9]{7}$/;

let driverValidations = [];
driverValidations.push({
    reg: usernameAdRegEx,
    field: $('#adUserName'),
    error: 'username pattern is wrong.! ex: A-z 0-9'
});
driverValidations.push({
    reg: passwordAdRegEx,
    field: $('#adPassword1'),
    error: 'password pattern is wrong.! ex: A-z 0-9 5 digits'
});
driverValidations.push({
    reg: driverNameRegEx,
    field: $('#driverName'),
    error: 'driver name pattern is wrong.! ex: A-z'
});
driverValidations.push({
    reg: driverAddressRegEx,
    field: $('#driverAddress'),
    error: 'driver address pattern is wrong.! ex: A-z 0-9, ./'
});
driverValidations.push({
    reg: driverAgeRegEx,
    field: $('#driverAge'),
    error: 'driver age pattern is wrong.! ex: 0-9'
});
driverValidations.push({
    reg: driverContactNumRegEx,
    field: $('#driverContact'),
    error: 'driver contact pattern is wrong.! ex: 0-9 10 digits'
});*/

setDriverID()

function setDriverID(){
    $.ajax({
        url: baseURL+"driver/generate",
        method: "get",
        success: function (resp){
            let id = resp.data;
            if (id==null){
                $('#driverId').val("D-001");
            } else {
                let idNo = parseInt(id.substr(2, 5)) + 1;
                console.log(idNo);
                $('#driverId').val('D-' + idNo.toString().padStart(3, '0'));
            }
        },
        error: function (error){
            let jsObject = JSON.parse(error.responseText);
            alert("error : " + jsObject.message);
        }
    });
}



