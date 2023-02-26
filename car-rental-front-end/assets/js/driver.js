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
    error: 'password pattern is wrong.! ex:0-9 5 digits'
});

function checkValidityDr() {
    for (let validation of driverLoginValidations) {
        if (checkDr(validation.reg, validation.field)) {
            testSuccessDr(validation.field, "");
        } else {
            setErrorDr(validation.field, validation.error);
        }
    }
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