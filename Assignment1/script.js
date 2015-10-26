"use strict";

//making all the empty cell editable
function setEditableTrue() {
    var contentEditable = document.getElementsByClassName('editable');
    for (var i = 0; i < contentEditable.length; i++) {
        contentEditable[i].setAttribute('contenteditable', true);
    }
}


function sudokuNumberValidationRule() {
     setEditableTrue();
     var contentEditable = document.getElementsByClassName('editable');
      for(var i=0; i < contentEditable.length; i++) {
          contentEditable[i].addEventListener('keyup', function () {
              if (validNumberCheck(this)) {
                  this.innerHTML = this.textContent;

                  if(checkEnd(this)==true && i > contentEditable.length) {
                      alert("Over");
                  }

              }
              else
                  this.innerHTML = "&nbsp;&nbsp;";
          });

      }
}

//reseting the board
function reset(){
    var originalEmptyCell = document.getElementsByClassName('editable');
    for(var i=0; i<originalEmptyCell.length; i++) {
        originalEmptyCell[i].innerHTML = "&nbsp;&nbsp;";
    }
}

//printing the result
function showResult(){
    var resultVal =[1,2,8,9,6,7,6,2,4,7,1,8,9,8,9,5,4,6,
                    5,1,8,3,4,6,7,1,5,3,8,2,5,6,1,
                    7,8,9,2,3,9,3,4,6,7,2,5,6,1,8,3,9,4];

    var originalEmptyCell = document.getElementsByClassName('editable');
    for(var i=0; i<originalEmptyCell.length; i++) {
        originalEmptyCell[i].innerHTML = resultVal[i];
        originalEmptyCell[i].style.color ="blue";
    }
}

//checking good number and also in row, column and box
function validNumberCheck(curObj){
    var curObjValue = curObj.textContent.trim();
    var myRegExp = new RegExp(/^[1-9]$/);

    if(myRegExp.test(curObjValue)){

        if (rowCheck(curObj)==true){
            if (columnCheck(curObj)==true){
                if (boxCheck(curObj)==true){
                    curObj.style.color = "green";
                    return true;

                }
            }
        }
        else {
            alert("Repeat same entry");
            curObj.style.color = "red";
            return true;
        }
    }
    else{
        alert('You need to enter a number between 1-9');
        return false;
    }
}

function rowCheck(entry){
    // get the row, column, and box class for the current entry
    var classList = entry.classList;
    var colNumber = classList[2]

    //checking row
    for(var i = 0; i < 9; i++) {
        var rowSelected = "row" + (i + 1);
        if (rowSelected == classList[1]) {

            for (var col = 0; col < 9; col++) {

                var columnSelected = "col"+(1+col);
                var columns = document.getElementsByClassName(columnSelected);

                var colValue = parseInt(columns[i].textContent.trim());

                if(columnSelected != colNumber){
                    if (parseInt(entry.textContent) == colValue) {
                        return false;
                    }//end if
                }//end if

            }//end for

            return true;
        }//end if

    }//end for
    //end row checking
}

function columnCheck(entry){
    // get the row, column, and box class for the current entry
    var classList = entry.classList;
    var rowNumber = classList[1]; //class name of the row

    //checking row
    for(var col = 0; col < 9; col++) {
        var colSelected = "col" + (col + 1);
        if (colSelected == classList[2]) {

            for (var row = 0; row < 9; row++) {

                var rowSelected = "row"+(1+row);
                var rows = document.getElementsByClassName(rowSelected);

                var rowValue = parseInt(rows[col].textContent.trim());

                if(rowSelected != rowNumber){
                    if (parseInt(entry.textContent)== rowValue) {

                        return false;
                    }//end if
                }//end if

            }//end for

            return true;
        }//end if

    }//end for
    //end column checking
}

function checkEnd(entry){

    var classList = entry.classList;

    //checking row
    for(var i = 0; i < 9; i++) {
        var rowSelected = "row" + (i + 1);
        if (rowSelected == classList[1]) {

            for (var j = 0; j < 9; j++) {
                var rows = document.getElementsByClassName(rowSelected);
                var rowValue = rows[j].innerHTML;
                    if (rowValue =="&nbsp;&nbsp;") {
                        return false;
                   }
                else return true;
            }
        }//end for

    }
  }

function boxCheck(entry){
    // get the box class for the current entry
    var classList = entry.classList;
    var boxNumber = classList[3];
    var colNumber = parseInt(classList[2].charAt(3));
    var rowNumber = parseInt(classList[1].charAt(3));

    var boxCol = parseInt(boxNumber.charAt(4));
    var boxRow = parseInt(boxNumber.charAt(3));

    var scanrow, scancol;

    for(scanrow = boxRow*3-2; scanrow < (boxRow * 3 + 1 ); scanrow++){

        for(scancol = boxCol*3-2; scancol <(boxCol * 3 + 1); scancol++) {
            var columns = document.getElementsByClassName("col"+scancol);

            var colValue = parseInt(columns[scanrow-1].textContent.trim());
            if(scancol != colNumber || scanrow != rowNumber){
               if(entry.textContent.trim() == colValue){

                   return false;
               }//end if
           }//end if

        }//end for
    }//end for
    return true;
}

window.document.body.onload =  sudokuNumberValidationRule();

document.getElementById("btnReset").addEventListener("click",reset);

document.getElementById("btnSolution").addEventListener("click",showResult);
