function analizarPaquetes(caso) {
  //TODO: parsear, consolidar, calcular y orenar
  const partes = caso.split("--");
  const destinos = partes[0].split(",");
  const registros = partes[1].split(";");
  const consolidados = consolidarRegistros(registros);
  const ciudades = calcularPorDestino(destinos, consolidados);
  const ordenados = ordenarDestinos(ciudades);
  return armarSalida(ordenados);
}
function consolidarRegistros(registros) {
  const consolidados = new Map();
  for (let i = 0; i < registros.length; i++) {
    const campos = registros[i].split(" ");
    let packageId = campos[0];
    let destination = campos[1];
    let weight = Number(campos[2]);
    let timestamp = Number(campos[4]);

    if (!consolidados.has(packageId)) {
      consolidados.set(packageId, {
        destination: destination,
        weight: weight,
        timestamp: timestamp,
      });
    } else {
      const fichaGuardada = consolidados.get(packageId);
      if (timestamp >= fichaGuardada.timestamp) {
        consolidados.set(packageId, {
          destination: destination,
          weight: weight,
          timestamp: timestamp,
        });
      }
    }
  }
  return consolidados;
}

function calcularPorDestino(destinos, consolidados) {
  const ciudades = new Map();
  for (let i = 0; i < destinos.length; i++) {
    ciudades.set(destinos[i], { totalPackages: 0, totalWeight: 0 });
  }

  for (const ficha of consolidados.values()) {
    const casilla = ciudades.get(ficha.destination);
    casilla.totalPackages = casilla.totalPackages + 1;
    casilla.totalWeight = casilla.totalWeight + ficha.weight;
  }
  return ciudades;
}

function ordenarDestinos(ciudades) {
  let ordenamiento = Array.from(ciudades.entries());
  ordenamiento.sort((a, b) => {
    const difPeso = b[1].totalWeight - a[1].totalWeight;
    if (difPeso !== 0) {
      return difPeso;
    }
    const difPaquetes = b[1].totalPackages - a[1].totalPackages;
    if (difPaquetes !== 0) {
      return difPaquetes;
    }
    return a[0].localeCompare(b[0]);
  });
  return ordenamiento;
}

function armarSalida(ordenamiento) {
  const despliegue = ordenamiento.map((elemento, posicion) => {
    return `${posicion + 1}) ${elemento[0]} ${elemento[1].totalPackages} ${elemento[1].totalWeight}`;
  });
  return despliegue.join("\n");
}
//Esto permite probar con Node sin romper el navegador
if (typeof module !== "undefined") {
  module.exports = { analizarPaquetes };
}
