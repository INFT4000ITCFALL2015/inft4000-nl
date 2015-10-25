"use strict";

function setEditableTrue() {
      var contentEditable = document.getElementsByClassName('editable');
      for(var i=0; i < contentEditable.length; i++) {
          contentEditable[i].setAttribute('contenteditable', true);
          contentEditable[i].addEventListener('keyup', function () {
              var validNumber = validNumberCheck(this);
              this.innerHTML = validNumber.textContent;

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
    var curObjValue = curObj.textContent.trim();
    var myRegExp = new RegExp(/^[1-9]$/);

    if(myRegExp.test(curObjValue)){
        var rowValue = rowCheck(curObj);
        var columnValue = columnCheck(rowValue);
       return columnValue;
    }
    else{
        alert('You need to enter a number between 1-9');
        return "&nbsp;&nbsp;";
    }
}

function rowCheck(entry){
    // get the row, column, and box class for the current entry
    var classList = entry.classList;
    var rowNumber = classList[1]; //class name of the row
    var colNumber = classList[2]

    var rows = document.getElementsByClassName(rowNumber);//value to get the row number from the class list

    //checking row
    for(var i = 0; i < 9; i++) {
        var rowSelected = "row" + (i + 1);
        if (rowSelected == classList[1]) {

            for (var col = 0; col < 9; col++) {

                var columnSelected = "col"+(1+col);
                var columns = document.getElementsByClassName(columnSelected);

                var colValue = columns[0].textContent.trim();

                if(columnSelected != colNumber){
                    if (entry.textContent.trim() == colValue) {

                    alert("Repeat same entry");
                    entry.style.color = 'red';
                    return entry;
                }
                }

            }
            entry.style.color = 'green';
            return entry;
        }//end for

    }
    //end row checking
}

function columnCheck(entry){
    // get the row, column, and box class for the current entry
    var classList = entry.classList;
    var rowNumber = classList[1]; //class name of the row
    var colNumber = classList[2]
    var columns = document.getElementsByClassName(colNumber);//value to get the row number from the class list

    //checking row
    for(var col = 0; col < 9; col++) {
        var colSelected = "col" + (col + 1);
        if (colSelected == classList[2]) {

            for (var row = 0; row < 9; row++) {

                var rowSelected = "row"+(1+row);
                var rows = document.getElementsByClassName(rowSelected);

                var rowValue = rows[0].textContent.trim();

                if(rowSelected != rowNumber){
                    if (entry.textContent.trim() == rowValue) {

                        alert("Repeat same entry");
                        entry.style.color = 'red';
                        return entry;
                    }
                }

            }
            entry.style.color = 'green';
            return entry;
        }//end for

    }
    //end column checking
}
window.document.body.onload = setEditableTrue;
document.getElementById("btnReset").addEventListener("click",reset);
