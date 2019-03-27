

var textFeild = document.querySelector(".form-control");


function addText(m){
    textFeild.value = textFeild.value + m;
}
function del1(){
    var mohit = textFeild.value;
    mohit = mohit.split('');
    mohit.pop();
    textFeild.value = "";
    for( i= 0; i<mohit.length ;i++){
        textFeild.value = textFeild.value + mohit[i];
    }
}