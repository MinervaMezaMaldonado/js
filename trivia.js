const nombre = document.getElementById("nombre");
var usuarix;

const enviar = document.getElementById("enviar");
const empezar = document.getElementById("empezar");
const repetirTrivia = document.getElementById("repetir");
const triviaCont = document.getElementById("cont");

const inicio = document.getElementById("inicio");
const categorias = document.getElementById("categorias");
const trivia = document.getElementById("trivia");
const resultado = document.getElementById("resultados");

const preguntasSociedad = [
  {
    pregunta: "Al viajar en el transporte público prefieres que el operador...",

    opciones: {
      a: "Se limite a conducir",
      b: "Designe un playlist de cumbias y acelere"
    },
    respuesta: "b"
  },
  {
    pregunta: "Cuando alguien te alburea tú...",

    opciones: {
      a: "Respondes con otro albur",
      b: "Haces como que no entendiste"
    },
    respuesta: "a"
  },
  {
    pregunta: "Cuando te encuentras con una manifestación tú...",
    opciones: {
      a: "Apoyas el movimiento",
      b: "Se las mientas"
    },
    respuesta: "b"
  },
  {
    pregunta: "Cuando el metro va muy lleno tú...",
    opciones: {
      a: "Esperas uno medio vacío",
      b: "Te metes rápido antes de que cierren las puertas"
    },
    respuesta: "b"
  }
];


const preguntasComida = [
  {
    pregunta:
    "Cuando te dispones a comer fuera de casa, buscas un lugar donde...",
    opciones: {
      a: "Se vea limpio y la comida huela rico",
      b: "Vendan garnachas"
    },
    respuesta: "b"
  },
  {
    pregunta:
    "Del puesto de elotes y patitas de Doña Lupe, ¿con qué picante acompañas tu elote?",
    opciones: {
      a: '1.Con el que "no pica"',
      b: '2.Con el más picoso "pa´ que sepa"'
    },
    respuesta: "b"
  }
];


 empezar.addEventListener("click", () => { 
   usuarix = nombre.value
   let titulo = document.getElementById('bienvenida')//console.log(nombre.value)
   titulo.innerHTML = `Bienvenid@, ${usuarix}`
 } )


function generarTrivia(preguntas) {
  // genera  las opciones de cada pregunta en pantalla y las muestra en la seccion trivia
  var pagina = []

  // por cada pregunta...
  for (let i = 0; i < preguntas.length; i++) {
    //Esto es la parte más importante, aquí se hace un párrafo html por cada arreglo de preguntas
    //es un ciclo 
    let pregunta = preguntas[i];
    let html = `
</br>
<h4> ${pregunta.pregunta} </h4>
<select class='opciones'>
<option value='a'>${pregunta.opciones.a}</option>
<option value='b'>${pregunta.opciones.b}</option>
</select>

</br>
`;
    /*
    if (i == preguntas.length-1) {
      html += `<button id='enviar'>Enviar respuestas</button></br>`

      //enviar.addEventListener('click', () => {generarResultados(preguntas)})
    }
    */

    pagina.push(html);
  }

  triviaCont.innerHTML = pagina.join(" ");
  /*
  Pensé en usar la orden seccionTrivia.style.display = 'block' y 'none' para ir cambiando a las secciones que definí conforme se ejecutaran las funciones, pero document.write me parece más fácil y clara, pues borra todo lo anterior, y siempre y cuando definamos antes el innerHTML dentro de secciónTrivia, las respuestas se quedarán guardadas ahí y podremos referenciarlas más adelante.
  */
  //document.write(trivia.innerHTML)
  trivia.style.display = "block";

  function generarResultados(_preguntas) {
    /* Aquí hacemos el recuento de las respuesta correctas, modificamos el CSS de los <select> que alojan las preguntas dependiendo de si son las esperadas o no, y esperamos al evento click del botón en la sección 'resultados'
*/
    var puntaje = 0;
    var respuestas = document.getElementsByClassName("opciones");

    for (let i = 0; i < preguntas.length; i++) {
      let pregunta = _preguntas[i];

      if (pregunta.respuesta == respuestas[i].value) {
        // Si es correcta
        puntaje++
        respuestas[i].style.backgroundColor = "lightgreen";
      } else {
        
        respuestas[i].style.backgroundColor = "orange";
      }
    }

    console.log(respuestas);
    console.log("generarResultados se ejecutó");
  }

  enviar.addEventListener("click", function() {
    generarResultados(preguntas);
  });

  console.log("generarTrivia se ejecutó");
} // FIN FUNCION GENERAR TRIVIA

/*
function generarResultados() {
//Aquí hacemos el recuento de las respuesta correctas,
//modificamos el CSS de los <select> que alojan las preguntas dependiendo de si son las esperadas o no,
//y esperamos al evento click del botón en la sección 'resultados'

  var puntaje;
  var respuestas = document.getElementsByClassName('preguntas')


  for (let i = 0; i < preguntas.length;i++) {

    let pregunta = preguntas[i]

    if (pregunta.respuesta == respuestas[i].value) {
      respuestas[i].style.backgroundColor = 'green'
    } else {
      respuestas[i].style.backgroundColor = 'red'
    }

  }


  console.log(respuestas)
  console.log('generarResultados se ejecutó')
}
*/

generarTrivia(preguntasSociedad);

//console.log('mostrarPreguntas se ejecutó')



/*
Me gustaria haber implementado:

  + que la función enlazada al botón 'Enviar respuestas' compruebe que todas fueron respondidas antes de continuar.
  + que la/el usuarix pueda generar sus propias trivias, y mejorar el loop de generarTrivia para que genere el HTML con las preguntas y respuestas de manera dinámica, porque en este ejercicio lo limité a dos incisos por pregunta.
  + 

*/
