const {analizarPaquetes}= require("./util;.js");

const entrada = "North,South,East--P1 North 10 Received 10;P2 South 20 Received 11;P1 East 10 InTransit 15;P3 North 15 Delivered 12;P2 South 20 InTransit 14;P4 East 30 Received 13";

const esperado = "1) East 2 40\n2) South 1 20\n3) North 1 15";
const obtenido = analizarPaquetes(entrada);

console.log(obtenido === esperado? "OK" : "FALLO\n" + obtenido);