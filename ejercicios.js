/* 
LOOP DE PARES
Debés crear una función llamada loopDePares que reciba como parámetro un número 

y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 

En caso de que el número de la iteración sumado con el número pasado por parámetro, sea par, mostrá en la consola “El número x es par”.
*/

function loopDePares(number) {
  for (let i = 0; i <= 100; i++) {
    //operadores ternarios : () ? if : else

    (number + i) % 2
      ? console.log(i)
      : console.log("El numero " + (number + i) + "es par");
  }
}

loopDePares(1);

("------------------------------------------------------");

function loopPar(num) {
  for (let i = 0; i <= 100; i++) {
    if ((i + num) % 2 == 0) {
      console.log(i);
    }
  }
}

("--------------------------------------------------------------");

function loopDePares(number) {
  for (let i = 0; i < 100; i++) {
    const suma = i + number; // sumamos el iterador con el numero pasado por parametro
    if (suma % 2 === 0) {
      // comprobamos si es par
      console.log(`El numero ${i} es par`);
    } else {
      console.log(i);
    }
  }
}
loopDePares(7);

/* LOOP DE IMPARES CON PALABRA
  Debés crear una función llamada loopDeImpares 
  
  que reciba como parámetro un número y una palabra 
  
  y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
  
  Ahora, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.
   */

/* function loopDeImpares(number, string) {
    for (let i = 0; i <= 100; i++) {
      if ((number + i) % 2 != 0) {
        console.log(string);
      } else {
        console.log(i);
      }
    }
  } */

function loopDeImpares(number, string) {
  for (let i = 0; i <= 100; i++) {
    (number + i) % 2 !== 0 ? console.log(string) : console.log(i);
  }
}

loopDeImpares(3, "plataforma5");

("-------------------------------------------------");

function loopDeImpares(number, str) {
  for (let i = 0; i < 100; i++) {
    const suma = i + number; // sumamos el iterador con el numero pasado por parametro
    if (suma % 3 === 0) {
      // comprobamos si es impar
      console.log(`${str}`);
    } else {
      console.log(i);
    }
  }
}

("--------------------------- Muy faciles de aca para arriba --------------------------------");

/* 
  CARACTER DEL MEDIO
  
  Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro 
  y devuelva sus caracteres del medio.
  
  Ejemplo: 
  
  middleCharacter(“plataforma5”) debe retornar “f”
  middleCharacter(“hola”) debe retornar “ol”
  middleCharacter(“cosas”) debe retornar “s”
  */

const middleCharacter = (string) => {
  //inicializamos variables de posición de corte y cantidad de caractéres a cortar.
  let posicion;
  let largo;
  //creamos condicional si el largo del string es impar
  if (string.length % 2 == 1) {
    //si el string es impar sacamos la posicion de corte dividiendo el string en 2
    posicion = string.length / 2;
    //indicamos el numero de caracteres a cortar del string
    largo = 1;
  } else {
    //si el strin es par sacamos posición de corte dividiendo en dos y restando 1
    posicion = string.length / 2 - 1;
    //indicamos el numero de caracteres a cortar del string
    largo = 2;
  }
  //cortamos el string indicando indice de inicio de corte y indice de final del corte.
  console.log(string.substring(posicion, posicion + largo));
};
middleCharacter("plataforma5")(
  "---------------------------------------------------------------------------------------"
);

// metodo .slice(): devolver una copia de una parte de mi array dentro de un nuevo array empezando por el inico hasta el fin.

function middleCharacter(string) {
  if (string.length % 2 != 0) {
    return string.slice(string.length / 2, string.length / 2 + 1);
  } else {
    return string.slice(string.length / 2 - 1, string.length / 2 + 1);
  }
}

("-------------------------------------------------------------------------");

//metodo .charAt(): El método charAt() de String devuelve en un nuevo String el carácter
//El charAt() método devuelve el carácter en el índice especificado de una cadena. El índice del primer carácter es 0, el segundo carácter es 1, y así sucesivamente.

function middleCharacter(string) {
  if (string.length % 2 != 0) {
    return string.charAt(string.length / 2);
  } else {
    return (
      string.charAt(string.length / 2 - 1) + string.charAt(string.length / 2)
    );
  }
}

("------------------------------------------------------------------------");

function middleCharacter(str) {
  if (str.length % 2 != 0) {
    return str[str.length / 2 - 0.5];
  } else {
    return str[str.length / 2 - 1] + str[str.length / 2];
  }
}

middleCharacter("plataforma5");

("----------------------------------------------------------------------------");

/* 
  MINIMA SUMA
  Debés crear una función llamada `minSum` 
  que reciba un arreglo de números desordenados  
  y devuelva la suma entre los dos números más chicos.
  
  Ejemplo: 
  minSum([7, 6, 5, 4, 3, 2, 1]) debe retornar 3 (2 + 1)
  minSum([1, 10, 43, 900, 20, 8]) debe retornar 9
   */

//metodo .sort(): ordenar los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado
//function minSum (){}

let minSum = function (array) {
  array = array.sort((a, b) => a - b);
  return array[0] + array[1];
};

minSum([7, 6, 5, 4, 3, 2, 1])(
  "---------------------------------------------------------------"
);

//Pure Vanilla (Una sola iteración y sin tener que sortear.)
let minSum = function (array) {
  //seteamos valores iniciales
  let min = array[0];
  let min2 = array[1];

  if (array[0] > array[1]) {
    min = array[1];
    min2 = array[0];
  }
  //iterar y comprobar si hay numeros menores dentro de nuestro arreglo
  for (let i = 1; i < array.length - 1; i++) {
    if (array[i + 1] < min2) {
      if (array[i + 1] < min) {
        min2 = min;
        min = array[i + 1];
      } else {
        min2 = array[i + 1];
      }
    }
  }
  // retornando la suma entre los dos numeros menores
  return min + min2;
};

minSum([1, 10, 43, 900, 20, 8]);

/*
  Mover ceros a lo último
  Debés crear una función llamada `moveZeros` que reciba un arreglo como parámetro y devuelva otro con los números `0` ordenados al final.
  
  Ejemplo: 
  moveZeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
  moveZeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0] */

//*push and splice
//El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
//El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. Desde tal numero que nosotros queramos hasta un otro numero

function moveZeros(array) {
  newArray = array;
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === 0) {
      newArray.push(Number(newArray.splice(i, 1)));
    }
  }
  return newArray;
}
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);

("-------------------------------------------------------------------------");

//El método concat() se usa para unir dos o más arrays.

function moveZeros(arreglo) {
  let ceros = [];
  let arregloSinCeros = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === 0) {
      ceros.push(arreglo[i]);
    } else {
      arregloSinCeros.push(arreglo[i]);
    }
  }
  console.log(ceros);
  console.log(arregloSinCeros);
  return arregloSinCeros.concat(ceros);
}
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);

("---------------------------------------------------------");

//.filter() es un método que retorna un nuevo Arreglo, con los datos filtrados según una Función que le pasamos por Parámetro.

const array = [1, 2, 0, 1, 0, 1, 0, 3, 0, 1];

const moveZeros = (arr) => {
  //creo un array filtrando el array sacando los 0
  let moviendoCeros = arr.filter((element) => element !== 0);
  //creo otro array filtrando y dejando sólo los 0
  let filtrandoCeros = arr.filter((element) => element == 0);
  //concateno ambos arrays en uno
  let resultado = moviendoCeros.concat(filtrandoCeros);

  return resultado;
};
moveZeros(array);
