// var data  = new Date();
// var result, an, luna, zi;

// an =  data.getFullYear();
// luna =  (data.getMonth() + 1);
// zi =data.getDate();

// result = an.toString() + "/" + luna.toString() + "/ " + zi.toString();

// alert(result);
function show(){
    document.getElementById("side-menu").classList.toggle("show");
}
function data(){
    var span;
    span = document.getElementById("data");
    span.innerHTML = "© All rights reserved. LCI Prometeu-Prim FLD" + an;
}
data();