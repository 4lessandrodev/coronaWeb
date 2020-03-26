let dashboard = document.getElementById("dashboard")
let buscaBairro = document.getElementById("casosPorBairro")
let buscaCep = document.getElementById("casosPorCep")


function showDashboard(params) {
    if (dashboard.style.display === "none") {
        dashboard.style.display = "block"
        buscaCep.style.display = "none"
        buscaBairro.style.display = "none"
    }
}

function buscarCasosPorBairro() {
    if (buscaBairro.style.display === "none") {
        dashboard.style.display = "none"
        buscaCep.style.display = "none"
        buscaBairro.style.display = "flex"
    } else {
        dashboard.style.display = "block"
        buscaBairro.style.display = "none"
    }
}

function buscarCasosPorCep() {
    if (buscaCep.style.display === "none") {
        dashboard.style.display = "none"
        buscaBairro.style.display = "none"
        buscaCep.style.display = "flex"
    } else {
        dashboard.style.display = "block"
        buscaCep.style.display = "none"
    }
}



// Add active class to the current button (highlight it)
var header = document.getElementById("sidebar");
var btns = header.getElementsByClassName("button");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}