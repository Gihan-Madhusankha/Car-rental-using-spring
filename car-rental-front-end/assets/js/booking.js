$('#selectVehicle').change(function () {
    let carName = $("#selectVehicle option:selected").text();
    searchVehicle(carName);
});

function searchVehicle(carName) {
    let response = "";
    $.ajax({
        url: baseURL + "car?carName=" + carName,
        dataType: "json",
        async: false,
        success: function (resp) {
            $('#selectVehicleType').empty();
            for (let c of resp.data) {
                $('#selectVehicleType').append(`<option value="1">${c}</option>`);
            }
        }
    });
    return response;
}


$('#selectVehicleType').change(function () {
    let carType = $("#selectVehicleType option:selected").text();
    console.log(carType);
    let res = searchVehicleType(carType);
    /*if (res.length > 0) {
        $("#bookingCarAvailable").val(res[0]);
        $("#bookingDailyRate").val(res[0].manageCarAvailableOrNot);
        $("#bookingMonthlyRate").val(res[0].manageCarAvailableOrNot);
        $("#bookingFreeKMPerDay").val(res[0].manageCarAvailableOrNot);
        $("#bookingFreeKMPerMonth").val(res[0].manageCarAvailableOrNot);
        $("#bookingFuelType").val(res[0].manageCarAvailableOrNot);
        $("#bookingPassengers").val(res[0].manageCarAvailableOrNot);
    }*/
});

function searchVehicleType(carType) {
    let response = "";
    $.ajax({
        url: baseURL + "car/c?carType=" + carType,
        dataType: "json",
        async: false,
        success: function (resp) {
            getAvailableCars(resp.data.manageCarType);

            // $("#bookingCarAvailable").val(availableCars);
            $("#bookingDailyRate").val(resp.data.manageCarDailyRatePrice);
            $("#bookingMonthlyRate").val(resp.data.manageCarMonthlyRatePrice);
            $("#bookingFreeKMPerDay").val(resp.data.manageCarFreeKMPerDay);
            $("#bookingFreeKMPerMonth").val(resp.data.manageCarFreeKMPerMonth);
            $("#bookingFuelType").val(resp.data.manageCarFuelType);
            $("#bookingPassengers").val(resp.data.manageCarNoOfPassengers);
        }
    });
}

function getAvailableCars(c) {
    $.ajax({
        url: baseURL + "car?c=" + c,
        method: "get",
        success: function (resp) {
            $("#bookingCarAvailable").val(resp.data);
        }
    });
}

generateBookingID();

function generateBookingID() {
    $.ajax({
        url: baseURL + "reserve/generate",
        method: "get",
        success: function (resp) {
            let bId = resp.data;
            if (bId == null) {
                $('#bookingId').val("B-001");
            } else {
                let bIdNo = parseInt(bId.substr(2, 5)) + 1;
                console.log(bIdNo);
                $('#bookingId').val('B-' + bIdNo.toString().padStart(3, '0'));
            }
        },
        error: function (error) {
            let jsObject = JSON.parse(error.responseText);
            alert("error : " + jsObject.message);
        }
    });
}

loadDrivers();

function loadDrivers() {
    $.ajax({
        url: baseURL + "driver",
        method: "get",
        success: function (resp) {
            $('#selectDriver').empty();
            $('#selectDriver').append(`<option value="1">none</option>`);
            for (let driver of resp.data) {
                $('#selectDriver').append(`<option value="1">${driver.driverID}</option>`);
            }
        }
    });
}

$('#selectDriver').change(function () {
    var a = $('#selectDriver option:selected').text();
    console.log(a);
    console.log(a == 'none');
    if (a == 'none') {
        $('#bookingDriverFee').val(0.00);
    } else {
        $('#bookingDriverFee').val(1500.00);
    }
});

$('#btnBooking').click(function () {
    var booking = {
        reserveID: $('#bookingId').val(),
        reserveDate: $('#bookingPickUpDate').val(),
        cusUsername: $('#bookingUsername').val(),
        pickDate: $('#bookingPickUpDate').val(),
        pickTime: $('#bookingPickUpTime').val(),
        returnDate: $('#bookingReturnDate').val(),
        returnTime: $('#bookingReturnTime').val(),
        duration: getDays($('#bookingPickUpDate').val(), $('#bookingReturnDate').val()),
        driverID: $('#selectDriver option:selected').text()
    }

    $.ajax({
        url: baseURL + "reserve",
        method: "post",
        contentType: "application/json",
        data: JSON.stringify(booking),
        success: function (resp) {
            alert('Booking successfully');
            generateBookingID();
            updateAvailableCars();
            clearFields();
        }
    });

    console.log(booking);
});

function getDays(a, b) {
    const startDate = new Date(a);
    const endDate = new Date(b);

    const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    const numDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    console.log('numDays : ', numDays);
    return numDays;
}

function updateAvailableCars() {
    var lastAvailableCarType = $('#selectVehicleType option:selected').text();
    console.log(lastAvailableCarType);
    $.ajax({
        url: baseURL + "car/c?lastAvailableCarType=" + lastAvailableCarType,
        method: "get",
        success: function (resp) {
            console.log("f :", resp.data);
            console.log("f :", resp.data.manageCarId);
            console.log("f :", resp.data.manageCarType);
            updateAvailableCarDetails(resp);
            // clearFields();

        }
    });
}

function updateAvailableCarDetails(resp){
    var carD = {
        manageCarId: resp.data.manageCarId,
        manageCarBrand: resp.data.manageCarBrand,
        manageCarColor: resp.data.manageCarColor,
        manageCarType: resp.data.manageCarType,
        manageCarRegistrationNo: resp.data.manageCarRegistrationNo,
        manageCarFuelType: resp.data.manageCarFuelType,
        manageCarTransmissionType: resp.data.manageCarTransmissionType,
        manageCarNoOfPassengers: resp.data.manageCarNoOfPassengers,
        manageCarDailyRatePrice: resp.data.manageCarDailyRatePrice,
        manageCarMonthlyRatePrice: resp.data.manageCarMonthlyRatePrice,
        manageCarFreeKMPerDay: resp.data.manageCarFreeKMPerDay,
        manageCarFreeKMPerMonth: resp.data.manageCarFreeKMPerMonth,
        manageCarTotalDistanceTravelled: resp.data.manageCarTotalDistanceTravelled,
        manageCarPriceForExtraKm: resp.data.manageCarPriceForExtraKm,
        manageCarInteriorView: resp.data.manageCarInteriorView,
        manageCarBackView: resp.data.manageCarBackView,
        manageCarSideView: resp.data.manageCarSideView,
        manageCarFrontView: resp.data.manageCarFrontView,
        manageCarAvailableOrNot: "Not Available",
        manageCarDamageOrNot: resp.data.manageCarDamageOrNot,
        manageCarUnderMaintainOrNot:resp.data.manageCarUnderMaintainOrNot
    }
    console.log('resp : ',resp.data);
    console.log('carD : ',carD);

    $.ajax({
        url: baseURL + "car",
        method: "post",
        contentType: "application/json",
        data: JSON.stringify(carD),
        success: function () {
            //alert('updated');
            console.log(carD);
        },
        error: function (error) {
            let jsObject = JSON.parse(error.responseText);
            alert("error : " + jsObject.message);
        }
    });
}

function clearFields() {
    $('#bookingCarAvailable').val("");
    $('#bookingDailyRate').val("");
    $('#bookingMonthlyRate').val("");
    $('#bookingFreeKMPerDay').val("");
    $('#bookingFreeKMPerMonth').val("");
    $('#bookingFuelType').val("");
    $('#bookingPassengers').val("");
    $('#selectDriver option:selected').text("none");
    $('#bookingDriverFee').val("0");
}

loadAllReserves();
function loadAllReserves(){
    $.ajax({
        url: baseURL + "reserve",
        method: "get",
        dataType: "json",
        success: function (resp) {
            $('#tblRentalDetail').empty();
            for (let res of resp.data) {
                $('#tblRentalDetail').append(`<tr><td> ${res.reserveID} </td><td> ${res.reserveDate} </td><td> ${res.customerID} </td><td> ${res.pickDate} </td><td> ${res.pickTime} </td><td> ${res.returnDate} </td><td> ${res.returnTime} </td><td> ${res.duration} </td><td> ${res.driverID} </td></tr>`);
            }
        },
        error: function (error) {
            let jsObject = JSON.parse(error.responseText);
            alert("error : " + jsObject.message);
        }
    });
}
