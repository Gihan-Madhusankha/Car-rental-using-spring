$('#usernameAd, #passwordAd').on('keyup', function () {
    checkValidity();
});

const usernameAdRegEx = /^[A-z]{3,10}$/;
const passwordAdRegEx = /^[A-z0-9]{5}$/;

let adminLoginValidations = [];
adminLoginValidations.push({
    reg: usernameAdRegEx,
    field: $('#usernameCus'),
    error: 'username pattern is wrong.! ex: A-z 0-9'
});
adminLoginValidations.push({
    reg: passwordAdRegEx,
    field: $('#passwordCus'),
    error: 'password pattern is wrong.! ex:0-9 5 digits'
});