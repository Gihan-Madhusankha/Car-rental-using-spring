$('#selectVehicle').change(function(){
    let carName = $("#selectVehicle option:selected").text();
    // $("#orderCustomerID").val(cusID);
    let res = searchVehicle(carName);
    // if (res.length > 0) {
    //     $("#bookingCarAvailable").val(res[0].manageCarAvailableOrNot);
    //     $("#bookingDailyRate").val(res[0].manageCarAvailableOrNot);
    //     $("#bookingMonthlyRate").val(res[0].manageCarAvailableOrNot);
    //     $("#bookingFreeKMPerDay").val(res[0].manageCarAvailableOrNot);
    //     $("#bookingFreeKMPerMonth").val(res[0].manageCarAvailableOrNot);
    //     $("#bookingFuelType").val(res[0].manageCarAvailableOrNot);
    //     $("#bookingPassengers").val(res[0].manageCarAvailableOrNot);
    // }
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
            // response = resp.data.filter((c) => {
            //     return c.manageCarId == carName;
            // });
        }
    });
    return response;
}

