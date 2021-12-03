function validateForm() {
    var elements = document.getElementById("contact_form").elements;
    var cansubmit = true;
    for (var i = 0;i < elements.length;i++) {
        if (elements[i].value.length == 0) {
            cansubmit = false;
            break;
        }
    }
    const newLocal = document.getElementById("submit_btn");
    if (newLocal.value == "Submitted") {
        newLocal.value = "Submit"
    }
    newLocal.disabled = !cansubmit;
}
function onSubmitOps() {
    if (!document.getElementById("submit_btn").disabled) {
        document.getElementById("submit_btn").value = "Submitted";
        document.getElementById("submit_btn").disabled = true;
    }
}
const express = require('express');
window.onload = validateForm;