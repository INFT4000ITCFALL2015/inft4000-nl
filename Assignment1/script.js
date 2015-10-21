"use strict";
window.document.body.onload = setEditableTrueAndKeyup;

function setEditableTrueAndKeyup() {
      var contentEditable = document.getElementsByClassName('editable');
      for(var i=0; i < contentEditable.length; i++) {
          contentEditable[i].setAttribute('contenteditable', true);
          contentEditable[i].addEventListener('keyup', function(){
              validNumberCheck(this.textContent)
          });
      }
}

 document.getElementById("btnReset").addEventListener("click",function() {
     var originalEmptyCell = document.getElementsByClassName('editable');
     for(var i=0; i<originalEmptyCell.length; i++) {
            originalEmptyCell[i].innerHTML = "&nbsp;&nbsp;";
     }
});

function validNumberCheck(curObj){

    var myRegExp = new RegExp(/^[1-9]$/);

    var input = curObj.trim();

    if(myRegExp.test(input))
    {
       return true;
    }
    else
    {
        alert('You need to enter number between 1-9');

        return false;

    }
}