/**
 * Created by inet2005 on 9/28/15.
 */
//Part A:
function myFunction(){
    document.getElementById("img1").style.zIndex = "1";
    document.getElementById("img2").style.opacity = "0.5";
    document.getElementById("img1").style.opacity = "1";
}
function myFunction1(){
    document.getElementById("img1").style.zIndex = "-1";
    document.getElementById("img1").style.opacity = "0.5";
    document.getElementById("img2").style.opacity = "1";
}

//Part B:
var accordionItems = new Array();

function init() {

    // Get all the accordion items from the page
    var divs = document.getElementsByTagName( 'div' );
    for ( var i = 0; i < divs.length; i++ ) {
        if ( divs[i].className == 'accordionItem' )
            accordionItems.push( divs[i] );

    }

    // Hide all accordion item bodies
    for ( var i = 0; i < accordionItems.length; i++ ) {
        accordionItems[i].className = 'accordionItem hide';
    }

    // Assign onclick events to the accordion item headings
    for ( var i = 0; i < accordionItems.length; i++ ) {
        var h2 = getFirstChildWithTagName( accordionItems[i], 'H2' );
        h2.onclick = toggleItem;
    }
}

//hides the the item if it is shown on the screen otherwise make the the item class as hide
function toggleItem() {
    var itemClass = this.parentNode.className;

    // Hide all items
    for ( var i = 0; i < accordionItems.length; i++ ) {
        accordionItems[i].className = 'accordionItem hide';
    }

    // Show this item if it was previously hidden
    if ( itemClass == 'accordionItem hide' ) {
        this.parentNode.className = 'accordionItem';
    }
}


function getFirstChildWithTagName( element, tagName ) {
    for ( var i = 0; i < element.childNodes.length; i++ ) {
        if ( element.childNodes[i].nodeName == tagName )
            return element.childNodes[i];
    }
}



//Part C:
var arr = [];

arr[0]= new Image();
arr[0].src = "image1.jpg";

arr[1]= new Image();
arr[1].src = "image2.jpg";

arr[2]= new Image();
arr[2].src = "image3.jpg";

arr[3]= new Image();
arr[3].src = "image4.jpg";

var i=0;

function slide(){
    document.getElementById("image1").src = arr[i].src;
    i++;
    if(i == arr.length){
        i=0;
    }
    setTimeout(function(){ slide(); },2500);
}