/*
$(document).ready(function () {
    $('#fullpage').fullpage();

    $(function () {
        $("header").load("modules/header.html");
        $("footer").load("modules/footer.html");
    });
});
*/


var cidade;
function pegarCidade(){
    var e = document.getElementById("listaCidades");
    cidade = e.options[e.selectedIndex].value;
    console.log(cidade);
}



/*
var qntd = document.getElementsByTagName("img").length;
document.getElementById("numeroImagens").innerHTML = qntd;

function trocarImagem(i) {
  alert(1)
  debugger;
    console.log(i)
    for (var j = 0; j < qntd; j++) {
        console.log(j)
        document.getElementsByTagName("img")[j].style.display = "none";
    }
    document.getElementsByTagName("img")[i].style.display = "block";
}
*/