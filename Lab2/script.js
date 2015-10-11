var students = [];
var sId = "";
var fName = "";
var lName = "";

document.getElementById("targetJSON").addEventListener("click",function(){
    document.getElementById("targetJSON").style.display = "none";
});


function convertJavascriptObjToJSONObj(){
    var myarray = [];
    var myJSON = "";
    var jsonObj = "";

    for(var i = 0; i < students.length; i++)
    {
        var item = {
            "StudentId": students[i].studentId,
            "FirstName": students[i].fName,
            "LastName": students[i].lName
        };

        myarray.push(item);
        myJSON = JSON.stringify({students: myarray});
    }

    jsonObj = JSON.parse(myJSON);
    document.getElementById("targetJSON").innerHTML = "<b><u>JavaScript Student Object As JSON Object:</u></b><br>";
    var div = document.getElementById("targetJSON");
    div.style.display = "block";
    div.style.zIndex = "1";
    div.style.opacity = "0.5";

    for(var i = 0; i < jsonObj.students.length; i++)
    {
        document.getElementById("targetJSON").innerHTML +=
            "Student ID: "  + jsonObj.students[i].StudentId + "<br>" +
            "Student Name: "  + jsonObj.students[i].FirstName + " "	 + jsonObj.students[i].LastName + "<hr>";
    }

}

function clearFormInputs(){
    document.forms["studentForm"].fName.value = "";
    document.forms["studentForm"].lName.value = "";
    document.forms["studentForm"].studentId.value = "";
    return false;
}

function student(student_id, first_name, last_name) {
    this.studentId = student_id;
    this.fName = first_name;
    this.lName = last_name;
    this.report = function(){
        return  "Student Id: " + this.studentId + "<br/> First Name: " + this.fName + " <br/> Last Name: " + this.lName + "<br />";
    };
}

document.getElementById("myButton").addEventListener("click",function(){

    if (document.getElementById("studentId").value!="" && document.getElementById("fName").value !="" && document.getElementById("lName").value!=""){

        sId = document.getElementById("studentId").value;
        fName = document.getElementById("fName").value;
        lName = document.getElementById("lName").value;

        var newStudent = new student(sId, fName, lName);

        for(var i=0; i < students.length; i++){
            var currentStudentId = students[i].studentId;
            if (sId == currentStudentId ){
                alert ("Sorry the Student Id already exists in the list.");
                clearFormInputs();
                document.forms["studentForm"].studentId.focus();
                return false;
            }
        }

        students.push(newStudent);

        document.getElementById("target").innerHTML = "";

        sId = "";
        fName = "";
        lName = "";

        document.getElementById("target").innerHTML = "<b><u>JavaScript Student Object As a Report: </u></b><br>";
        for(var i = 0; i < students.length; i++)
        {
            document.getElementById("target").innerHTML += students[i].report();
        }

        clearFormInputs();
        studentForm.studentId.focus();
        return true;
    }

    else {
        alert ("Sorry the form input boxes are empty. There is no input. Please Enter some valid inputs.");
        document.forms["studentForm"].studentId.focus();
        return false;
    }
});

document.getElementById("target").addEventListener("mouseover",convertJavascriptObjToJSONObj);



