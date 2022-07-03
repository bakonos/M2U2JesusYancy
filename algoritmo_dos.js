function valorTotal() 
{
    document.getElementById("igual").innerHTML = "";
    igual = "N";
    numeros = [];
    num1 = document.getElementById("valor_uno").value;
    num2 = document.getElementById("valor_dos").value;
    num3 = document.getElementById("valor_tres").value;
    num4 = document.getElementById("valor_cuatro").value;
  
    numeros.push(parseInt(num1));
    numeros.push(parseInt(num2));
    numeros.push(parseInt(num3));
    numeros.push(parseInt(num4));
  
    Menor = Math.min.apply(null, numeros);
    Mayor = Math.max(...numeros);
    console.log(Mayor);
    console.log(Menor);
    for (i = 0; i < numeros.length; i++) 
    {
      num = numeros[i];
      for (j = i + 1; j < numeros.length; j++) 
      {
        if (numeros[j] == num) 
        {
          igual = "S";
        }
      }
    }
  
    if (igual == "S") 
    {
      document.getElementById("igual").innerHTML =
        "Existen números repetidos, por favor cambie uno de ellos";
    } else 
    {
      document.getElementById("igual").innerHTML =
        "El número mayor es " + Mayor + " y el número menor es " + Menor;
    }
  }