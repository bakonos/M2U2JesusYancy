function valorTotal() {
    let nombre = document.getElementById("nombre_estudiante").value;
    let cantidad_materias = document.getElementById("cantidad_materias").value;
    let costo_materias = [];
    let equivocar = "N";
    let total = 0;
    do {
      if (equivocar == "N") {
        for (i = 1; i <= cantidad_materias; i++) {
          let valor = prompt("Ingrese el valor de la materia " + i);
          costo_materias.push(valor);
        }
      }
      equivocar = prompt("Te equivocaste en el costo de alguna materia? S/N");
  
      if (equivocar == "S") {
        let cual = prompt("Cual materia");
        valor = prompt("Ingrese el valor de la materia " + cual);
        costo_materias[cual] = valor;
      }
    } while (equivocar == "S");
  
    for (i = 0; i < cantidad_materias; i++) {
      console.log(total);
      total = total + parseInt(costo_materias[i]);
    }
    console.log(total);
  
    total = total - total * 0.2 + 28000;
  
    document.getElementById("total").innerHTML =
      nombre +" " +"tienes que pagar $" + Math.round(total).toLocaleString("es-MX");
  }