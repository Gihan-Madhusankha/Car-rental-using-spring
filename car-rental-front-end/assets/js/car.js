function generateCarID() {
    $.ajax({
        url: baseURL + "car/generate",
        method: "get",
        success: function (resp) {
            let cId = resp.data;
            if (cId == null) {
                $('#manageCarId').val("C-001");
            } else {
                let cIdNo = parseInt(id.substr(2, 5)) + 1;
                console.log(cIdNo);
                $('#adID').val('C-' + cIdNo.toString().padStart(3, '0'));
            }
        },
        error: function (error) {
            let jsObject = JSON.parse(error.responseText);
            alert("error : " + jsObject.message);
        }
    });
}