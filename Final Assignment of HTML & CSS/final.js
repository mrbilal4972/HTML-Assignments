function chk1(){

    document.getElementById('chkout1').style.display = "block";
    var len = document.getElementsByClassName("pkg").length;
    for(i = 0; i < len; i++){
    document.getElementsByClassName("pkg")[i].style.display = "none";
    }
}

function retrn(){

    document.getElementById('chkout1').style.display = "none";
    var len = document.getElementsByClassName("pkg").length;
    for(i = 0; i < len; i++){
    document.getElementsByClassName("pkg")[i].style.display = "inline-block";
    }
}