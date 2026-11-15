const { analizarPaquetes } = require("./util");

const entrada = document.getElementById("entrada");
const resultado = document.getElementById("resultado");

//Datos iniciales de prueba 
entrada.value = "North,South,East--P1 North 10 Received 10;P2 South 20 Received 11;P1 East 10 InTransit 15;P3 North 15 Delivered 12;P2 South 20 InTransit 14;P4 East 30 Received 13";

document.getElementById("btnProcesar").addEventListener("click",() => { resultado.textContent = analizarPaquetes(entrada.value.trim());
    
});