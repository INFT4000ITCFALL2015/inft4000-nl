"use strict";

function setEditableTrueAndValidateNumber() {
      var contentEditable = document.getElementsByClassName('editable');
      for(var i=0; i < contentEditable.length; i++) {
          contentEditable[i].setAttribute('contenteditable', true);
          contentEditable[i].addEventListener('keyup', function () {

              if (validNumberCheck(this)) {

                  this.innerHTML = this.textContent;
              }
              else
                  this.innerHTML = "&nbsp;&nbsp;";
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
        var columnValue = columnCheck(curObj);
        var boxValue = boxCheck(curObj);
       return (boxValue);
    }
    else{
        alert('You need to enter a number between 1-9');
        return false;
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

                var colValue = parseInt(columns[i].textContent.trim());

                if(columnSelected != colNumber){
                    if (parseInt(entry.textContent) == colValue) {

                    alert("Repeat same entry");
                    entry.style.color = 'red';
                    return false;
                }
                }

            }
            entry.style.color = 'green';
            return true;
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

                var rowValue = parseInt(rows[col].textContent.trim());

                if(rowSelected != rowNumber){
                    if (parseInt(entry.textContent)== rowValue) {

                        alert("Repeat same entry");
                        entry.style.color = 'red';
                        return false;
                    }//end if
                }

            }
            entry.style.color = 'green';
            return true;
        }//end for

    }
    //end column checking
}


function boxCheck(entry){
    // get the row, column, and box class for the current entry


    var classList = entry.classList;
    var boxNumber = classList[3];
    var colNumber = parseInt(classList[2].charAt(3));
    var rowNumber = parseInt(classList[1].charAt(3));

    var boxCol = boxNumber.charAt(4);
    var boxRow = parseInt(boxNumber.charAt(3));




    var scanrow, scancol;

    for(scanrow = boxRow*3-2; scanrow < (boxRow * 3 + 1 ); scanrow++){


        for(scancol = boxCol*3-2; scancol <(boxCol * 3 + 1); scancol++) {
            var columns = document.getElementsByClassName("col"+scancol);

            var colValue = parseInt(columns[scanrow-1].textContent.trim());
           if(scancol != colNumber || scanrow != rowNumber){
               if(entry.textContent.trim() == colValue){
                   alert("Repeat same entry");
                   entry.style.color = 'red';
                   return false;
               }//end if
           }//end if
        }//end for
    }//end for
    entry.style.color = 'green';
    return true;
}

window.document.body.onload = setEditableTrueAndValidateNumber;
document.getElementById("btnReset").addEventListener("click",reset);
