"use strict";
function isNumberKey(event) {
    var charCode = event.which || event.keyCode;

    if (charCode > 31 && (charCode < 49 || charCode > 57)) {
        return false;
    }

    return true;
}

function validNumbers(field)
{
    if(/^[1-9]{1}$/.test(field.value))
    {
        return true;
    }
    else
    {
        alert("Not Text");
        return false;
    }
}

