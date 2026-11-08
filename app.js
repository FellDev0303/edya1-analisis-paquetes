const entrada = document.getElementById("entrada");
const resultado = document.getElementById("resultado");
const btnProcesar = document.getElementById("btnProcesar");
const btnLimpiar = document.getElementById("btnLimpiar");

entrada.value =
  "North,South,East--P1 North 10 Received 10;P2 South 20 Received 11;P1 East 10 InTransit 15;P3 North 15 Delivered 12;P2 South 20 InTransit 14;P4 East 30 Received 13";

btnProcesar.addEventListener("click", () => {
  const texto = entrada.value.trim();
  if (!texto || !texto.includes("--")) {
    resultado.textContent = "Formato inválido. Use: destinos--registros";
    return;
  }
  resultado.textContent = analizarPaquetes(texto);
});

btnLimpiar.addEventListener("click", () => {
  entrada.value = "";
  resultado.textContent = "";
});
