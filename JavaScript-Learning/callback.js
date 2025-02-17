function formSubmit(message, cbFun) {
    cbFun();
    console.log(message);
}

function formVerficication() {
    console.log("Form Verified");
}

formSubmit("Form Submited Successfully", formVerficication);

