function analizarPaquetes(caso){
    //TODO: parsear, consolidar, calcular y orenar
    const partes= caso.split("--");
    console.log(partes);
    const destinos =partes[0].split(",");
    const registros = partes[1].split(";");
    console.log(destinos);
    console.log(registros);
    return "";
}

//Esto permite probar con Node sin romper el navegador
if (typeof module !== "undefined"){
    module.exports= {analizarPaquetes};
}