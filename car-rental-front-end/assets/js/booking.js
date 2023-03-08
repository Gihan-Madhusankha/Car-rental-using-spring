$('#selectVehicle').change(function(){
    let carName = $("#selectVehicle option:selected").text();
    searchVehicle(carName);
});

function searchVehicle(carName){
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


$('#selectVehicleType').change(function (){
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

function searchVehicleType(carType){
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

function getAvailableCars(c){
    $.ajax({
        url: baseURL+"car?c="+c,
        method: "get",
        success: function (resp){
            $("#bookingCarAvailable").val(resp.data);
        }
    });
}