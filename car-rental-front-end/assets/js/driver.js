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

$('#btnSaveDriver').click(function () {
    var driver = {
        driverID: $('#driverId').val(),
        driverName: $('#driverName').val(),
        driverAddress: $('#driverAddress').val(),
        age: $('#driverAge').val(),
        contact: $('#driverContact').val(),
        releaseOrNot: $('#driverReleaseOrNot option:selected').text(),
        adminID: $('#adUserId').val()
    }

    $.ajax({
        url: baseURL + "driver",
        method: "post",
        dataType: "json",
        data: JSON.stringify(driver),
        contentType: "application/json",
        success: function () {
            loadAllDrivers();
        },
        error: function (error) {
            let jsObject = JSON.parse(error.responseText);
            alert("error : " + jsObject.message);
        }
    })
});

loadAllDrivers();
function loadAllDrivers() {
    $.ajax({
        url: baseURL + "driver",
        method: "get",
        dataType: "json",
        success: function (resp) {
            $('#tblDriver').empty();
            for (let dr of resp.data) {
                $('#tblDriver').append('<tr><td>' + dr.driverID + '</td><td>' + dr.driverName + '</td><td>' + dr.driverAddress + '</td><td>' + dr.age + '</td><td>' + dr.contact + '</td><td>' + dr.releaseOrNot + '</td>' +
                    '<td><button class="btn btn-success btn-sm" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" type="button" id="btnEdit">Edit</button></td></tr>');
            }
            setDriverID();
            clearTextFields1();
            bindRowClickEvent1();
        },
        error: function (error) {
            let jsObject = JSON.parse(error.responseText);
            alert("error : " + jsObject.message);
        }
    });
}


function clearTextFields1() {
    $('#driverId').val("");
    $('#driverName').val("");
    $('#driverAddress').val("");
    $('#driverAge').val("");
    $('#driverContact').val("");
    $('#driverReleaseOrNot').val("");
}

function bindRowClickEvent1() {
    $('#tblDriver > tr').click(function () {
        let id = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let address = $(this).children(":eq(2)").text();
        let age = $(this).children(":eq(3)").text();
        let contact = $(this).children(":eq(4)").text();
        let release = $(this).children(":eq(5)").text();

        $('#driverId').val(id);
        $('#driverName').val(name);
        $('#driverAddress').val(address);
        $('#driverAge').val(age);
        $('#driverContact').val(contact);
        $('#driverReleaseOrNot option:selected').text(release);
    });
}

function setDriverID() {
    $.ajax({
        url: baseURL + "driver/generate",
        method: "get",
        success: function (resp) {
            let id = resp.data;
            if (id == null) {
                $('#driverId').val("D-001");
            } else {
                let idNo = parseInt(id.substr(2, 5)) + 1;
                console.log(idNo);
                $('#driverId').val('D-' + idNo.toString().padStart(3, '0'));
            }
        },
        error: function (error) {
            let jsObject = JSON.parse(error.responseText);
            alert("error : " + jsObject.message);
        }
    });
}

$('#btnUpdateDriver').click(function (){
    var driver = {
        driverID: $('#driverId').val(),
        driverName: $('#driverName').val(),
        driverAddress: $('#driverAddress').val(),
        age: $('#driverAge').val(),
        contact: $('#driverContact').val(),
        releaseOrNot: $('#driverReleaseOrNot option:selected').text()
    }

    $.ajax({
        url: baseURL + "driver",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(driver),
        dataType: "json",
        success: function () {
            loadAllDrivers();
        },
        error: function (error) {
            let jsObject = JSON.parse(error.responseText);
            alert("error : " + jsObject.message);
        }
    })
});

$('#btnDeleteDriver').click(function () {
    var dId = $('#driverId').val();

    $.ajax({
        url: baseURL + "driver?dId=" + dId,
        method: "delete",
        dataType: "json",
        success: function () {
            loadAllDrivers();
            // bindRowClickEvent1();
        },
        error: function (error) {
            let jsObject = JSON.parse(error.responseText);
            alert("error : " + jsObject.message);
        }
    });
});

