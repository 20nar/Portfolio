var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function(){
    
    if(content.className == "open"){
        //shrink the box
        content.className = "";
    } else {
        //expand the box
        content.className ="open";
    }
}

