$('#btnSaveCar').click(function () {
    var car = {
        manageCarId: $('#manageCarId').val(),
        manageCarBrand: $('#manageCarBrand option:selected').text(),
        manageCarColor: $('#manageCarColor option:selected').text(),
        manageCarType: $('#manageCarType option:selected').text(),
        manageCarRegistrationNo: $('#manageCarRegistrationNo').val(),
        manageCarFuelType: $('#manageCarFuelType option:selected').text(),
        manageCarTransmissionType: $('#manageCarTransmissionType option:selected').text(),
        manageCarNoOfPassengers: $('#manageCarNoOfPassengers').val(),
        manageCarDailyRatePrice: $('#manageCarDailyRatePrice').val(),
        manageCarMonthlyRatePrice: $('#manageCarMonthlyRatePrice').val(),
        manageCarFreeKMPerDay: $('#manageCarFreeKMPerDay').val(),
        manageCarFreeKMPerMonth: $('#manageCarFreeKMPerMonth').val(),
        manageCarTotalDistanceTravelled: $('#manageCarTotalDistanceTravelled').val(),
        manageCarPriceForExtraKm: $('#manageCarPriceForExtraKm').val(),
        manageCarInteriorView: $("#manageCarInteriorView")[0].files[0].name,
        manageCarBackView: $("#manageCarBackView")[0].files[0].name,
        manageCarSideView: $("#manageCarSideView")[0].files[0].name,
        manageCarFrontView: $("#manageCarFrontView")[0].files[0].name,
        manageCarAvailableOrNot: $('#manageCarAvailableOrNot option:selected').text(),
        manageCarDamageOrNot: $('#manageCarDamageOrNot option:selected').text(),
        manageCarUnderMaintainOrNot: $('#manageCarUnderMaintainOrNot option:selected').text()
    }

    $.ajax({
        url: baseURL + "car",
        method: "post",
        contentType: "application/json",
        data: JSON.stringify(car),
        success: function () {
            loadAllCars();
        },
        error: function (error) {
            let jsObject = JSON.parse(error.responseText);
            alert("error : " + jsObject.message);
        }
    });

});


function generateCarID() {
    $.ajax({
        url: baseURL + "car/generate",
        method: "get",
        success: function (resp) {
            let cId = resp.data;
            if (cId == null) {
                $('#manageCarId').val("C-001");
            } else {
                let cIdNo = parseInt(cId.substr(2, 5)) + 1;
                console.log(cIdNo);
                $('#manageCarId').val('C-' + cIdNo.toString().padStart(3, '0'));
            }
        },
        error: function (error) {
            let jsObject = JSON.parse(error.responseText);
            alert("error : " + jsObject.message);
        }
    });
}

loadAllCars();

function loadAllCars() {
    $.ajax({
        url: baseURL + "car",
        method: "get",
        dataType: "json",
        success: function (resp) {
            $('#tblCar').empty();
            for (let car of resp.data) {
                $('#tblCar').append('<tr><td>' + car.manageCarId + '</td><td>' + car.manageCarBrand + '</td><td>' + car.manageCarColor + '</td><td>' + car.manageCarType + '</td><td>' + car.manageCarRegistrationNo + '</td><td>' + car.manageCarFuelType + '</td><td>' + car.manageCarTransmissionType + '</td><td>' + car.manageCarNoOfPassengers + '</td><td>' + car.manageCarDailyRatePrice + '</td><td>' + car.manageCarMonthlyRatePrice + '</td><td>' + car.manageCarFreeKMPerDay + '</td><td>' + car.manageCarFreeKMPerMonth + '</td><td>' + car.manageCarTotalDistanceTravelled + '</td><td>' + car.manageCarPriceForExtraKm + '</td><td>' +
                    $('#manageCarInteriorView').attr('src', car.manageCarInteriorView) + '</td><td>' + '<img src=car.manageCarBackView alt="">' + '</td><td>' + '<img src=car.manageCarSideView alt="">' + '</td><td>' + '<img src=car.manageCarFrontView alt="">' + '</td><td>' + car.manageCarAvailableOrNot + '</td><td>' + car.manageCarDamageOrNot + '</td><td>' + car.manageCarUnderMaintainOrNot + '</td></tr>');
            }
            generateCarID();
            clearCarTextFields();
            bindRowCarClickEvent();
        },
        error: function (error) {
            let jsObject = JSON.parse(error.responseText);
            alert("error : " + jsObject.message);
        }
    });
}

function clearCarTextFields() {
    $('#manageCarId').val("");
    $('#manageCarBrand').val("");
    $('#manageCarColor').val("");
    $('#manageCarType').val("");
    $('#manageCarRegistrationNo').val("");
    $('#manageCarFuelType').val("");
    $('#manageCarTransmissionType').val("");
    $('#manageCarNoOfPassengers').val("");
    $('#manageCarDailyRatePrice').val("");
    $('#manageCarMonthlyRatePrice').val("");
    $('#manageCarFreeKMPerDay').val("");
    $('#manageCarFreeKMPerMonth').val("");
    $('#manageCarTotalDistanceTravelled').val("");
    $('#manageCarPriceForExtraKm').val("");
    $('#manageCarInteriorView').val("");
    $('#manageCarBackView').val("");
    $('#manageCarSideView').val("");
    $('#manageCarFrontView').val("");
    $('#manageCarAvailableOrNot').val("");
    $('#manageCarDamageOrNot').val("");
    $('#manageCarUnderMaintainOrNot').val("");
}

function bindRowCarClickEvent() {
    $('#tblCar > tr').click(function () {
        let manageCarId = $(this).children(":eq(0)").text();
        let manageCarBrand = $(this).children(":eq(1)").text();
        let manageCarColor = $(this).children(":eq(2)").text();
        let manageCarType = $(this).children(":eq(3)").text();
        let manageCarRegistrationNo = $(this).children(":eq(4)").text();
        let manageCarFuelType = $(this).children(":eq(5)").text();
        let manageCarTransmissionType = $(this).children(":eq(6)").text();
        let manageCarNoOfPassengers = $(this).children(":eq(7)").text();
        let manageCarDailyRatePrice = $(this).children(":eq(8)").text();
        let manageCarMonthlyRatePrice = $(this).children(":eq(9)").text();
        let manageCarFreeKMPerDay = $(this).children(":eq(10)").text();
        let manageCarFreeKMPerMonth = $(this).children(":eq(11)").text();
        let manageCarTotalDistanceTravelled = $(this).children(":eq(12)").text();
        let manageCarPriceForExtraKm = $(this).children(":eq(13)").text();
        let manageCarInteriorView = $(this).children(":eq(14)").text();
        let manageCarBackView = $(this).children(":eq(15)").text();
        let manageCarSideView = $(this).children(":eq(16)").text();
        let manageCarFrontView = $(this).children(":eq(17)").text();
        let manageCarAvailableOrNot = $(this).children(":eq(18)").text();
        let manageCarDamageOrNot = $(this).children(":eq(19)").text();
        let manageCarUnderMaintainOrNot = $(this).children(":eq(20)").text();

        $('#manageCarId').val(manageCarId);
        $('#manageCarBrand option:selected').text(manageCarBrand);
        $('#manageCarColor option:selected').text(manageCarColor);
        $('#manageCarType option:selected').text(manageCarType);
        $('#manageCarRegistrationNo').val(manageCarRegistrationNo);
        $('#manageCarFuelType option:selected').text(manageCarFuelType);
        $('#manageCarTransmissionType option:selected').text(manageCarTransmissionType);
        $('#manageCarNoOfPassengers').val(manageCarNoOfPassengers);
        $('#manageCarDailyRatePrice').val(manageCarDailyRatePrice);
        $('#manageCarMonthlyRatePrice').val(manageCarMonthlyRatePrice);
        $('#manageCarFreeKMPerDay').val(manageCarFreeKMPerDay);
        $('#manageCarFreeKMPerMonth').val(manageCarFreeKMPerMonth);
        $('#manageCarTotalDistanceTravelled').val(manageCarTotalDistanceTravelled);
        $('#manageCarPriceForExtraKm').val(manageCarPriceForExtraKm);
        $('#manageCarInteriorView').val(manageCarInteriorView);
        $('#manageCarBackView').val(manageCarBackView);
        $('#manageCarSideView').val(manageCarSideView);
        $('#manageCarFrontView').val(manageCarFrontView);
        $('#manageCarAvailableOrNot option:selected').text(manageCarAvailableOrNot);
        $('#manageCarDamageOrNot option:selected').text(manageCarDamageOrNot);
        $('#manageCarUnderMaintainOrNot option:selected').text(manageCarUnderMaintainOrNot);
    });
}