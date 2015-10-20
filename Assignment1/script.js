"use strict";
window.document.body.onload = setEditableTrue;

function isNumberKey(event) {
    var charCode = event.which || event.keyCode;

    if (charCode > 31 && (charCode < 49 || charCode > 57)) {

        return true;
    }
    else {
        alert ('Not string');
        return false;
    }
}

function setEditableTrue() {

    var contentEditable = document.getElementsByClassName('editable');
    for(var i=0; i < contentEditable.length; i++) {
        contentEditable[i].setAttribute('contenteditable', true);
    }
}



document.getElementById("btnReset").addEventListener("click",function() {

    var originalEmptyCell = document.getElementsByClassName('originalEmptyCell');
    for(var i=0; i<originalEmptyCell.length; i++) {
           originalEmptyCell[i].innerHTML = "&nbsp;&nbsp;";
    }
});





