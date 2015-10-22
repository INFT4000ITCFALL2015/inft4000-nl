"use strict";

function setEditableTrue() {
      var contentEditable = document.getElementsByClassName('editable');
      for(var i=0; i < contentEditable.length; i++) {
          contentEditable[i].setAttribute('contenteditable', true);
          contentEditable[i].addEventListener('keyup', function () {
              var test = validNumberCheck(this.textContent);
              this.innerHTML = test;

          });
      }

}

function reset(){
    var originalEmptyCell = document.getElementsByClassName('editable');
    for(var i=0; i<originalEmptyCell.length; i++) {
        originalEmptyCell[i].innerHTML = "&nbsp;&nbsp;";
    }
}

function validNumberCheck(curObj){

    var myRegExp = new RegExp(/^[1-9]$/);

    var input = curObj.trim();

    if(myRegExp.test(input))
    {
        return input;
    }
    else
    {
        alert('You need to enter a number between 1-9');
        return "&nbsp;&nbsp;";
    }
}

window.document.body.onload = setEditableTrue;
document.getElementById("btnReset").addEventListener("click",reset);
