/**
 * Created by inet2005 on 9/24/15.
 */
function highLightNewsItems(headerElement){
    //headerElement.style.backgroundColor = "red";

    var articleNode = headerElement.parentNode;
    articleNode.style.backgroundColor = "red";
}

function setBackNewsItems(headerElement){
    //headerElement.style.backgroundColor = "red";

    var articleNode = headerElement.parentNode;
    articleNode.style.backgroundColor = "transparent";
}

function showAlert(){
    alert("Limited time only");
}

function addNewTextToFooter(){
    var footerElement = document.getElementById("targetFooter");

    var newParaNode = document.createElement("p");
    var newTextNode = document.createTextNode("New Text");
    newParaNode.appendChild(newTextNode);
    footerElement.appendChild(newParaNode);
}

document.getElementById("clickHeader").addEventListener("dblclick",addNewTextToFooter);
document.getElementById("secondClickHeader").addEventListener("click",showAlert);

document.getElementById("secondClickHeader").addEventListener("mouseover",function(){
    highLightNewsItems(this);
});

document.getElementById("secondClickHeader").addEventListener("mouseout",function(){
    setBackNewsItems(this);
});

