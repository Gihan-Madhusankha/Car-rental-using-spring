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
$('#adId, #adminName, #adPassword, #adContact').on('keyup', function () {
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