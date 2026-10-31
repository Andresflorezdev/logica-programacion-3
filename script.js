document.getElementById("calcularBtn").addEventListener("click", () => {
  const inputValor = document.getElementById("numeroInput").value;
  const numero = Number(inputValor);
  const resultadoElemento = document.getElementById("resultado");

  // Validamos
  if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
    resultadoElemento.textContent = "Error, ingresa un numero entero valido";
    resultadoElemento.style.color = "red";
    return;
  }

  // Calculamos el factorial
  let facto = 1;
  for (let i = 1; i <= numero; i++) {
    facto = facto * i;
  }

  // Mostramos el resultado en el DOM
  resultadoElemento.textContent = `El factorial de ${numero} es: ${facto}`;
  resultadoElemento.style.color = "green";
});