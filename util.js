function analizarPaquetes(caso){
    //TODO: parsear, consolidar, calcular y orenar
    const partes= caso.split("--");
   
    const destinos =partes[0].split(",");
    const registros = partes[1].split(";");

    console.log(partes);
    console.log(destinos);
    console.log(registros);

    for(let i=0; i<registros.length; i++){
        const campos = registros[i].split(" ");
        let packageId= campos[0];
        let destination = campos[1];
        let weight = Number(campos[2]);
        let timestamp = Number(campos[4]);
        console.log(packageId, destination, weight, timestamp);

    }
    return "";
}

//Esto permite probar con Node sin romper el navegador
if (typeof module !== "undefined"){
    module.exports= {analizarPaquetes};
}