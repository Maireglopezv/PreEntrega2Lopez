/*Mensaje de Inicio*/
let inicio = alert("¡Hola! Ingresa tus datos de usuario y dale un vistazo en la Consola a los libros que tenemos disponibles para ti ✨")

/*Contructor de Datos de Usuario*/

class Usuario {
    constructor(a, b){
        this.usuario = a;
        this.correo = b;
    }
}

/*Ingreso de Datos de Usuario*/

let usuario = prompt("Ingresa tu Nombre de Usuario")
let correo = prompt("Ingresa tu Correo Electrónico")

let usuarioNuevo = new Usuario(usuario, correo);
let bienvenida = alert("Bienvenido " + usuario + " ✨" + " .Nuestra Biblioteca Virtual cuenta con diversos libros de tres reconocidos autores. Echa un vistazo!😉")
console.log(usuarioNuevo);

/*Datos de Libros Disponibles*/

const libros = [
    {
        autor: 'ANDREWS',
        nombre: 'FLORES EN EL ATICO',
        genero: 'FICCION',
        año: 1979,
        precio: 15000,
    },
    {
        autor: 'ANDREWS',
        nombre: 'PETALOS AL VIENTO',
        genero: 'FICCION',
        año: 1980,
        precio: 17000,
    },
    {
        autor: 'ANDREWS',
        nombre: 'SI HUBIERAN ESPINAS',
        genero: 'FICCION',
        año: 1981,
        precio: 15500,
    },
    {
        autor: 'ANDREWS',
        nombre: 'SEMILLAS DEL AYER',
        genero: 'FICCION',
        año: 1984,
        precio: 16000,
    },
    {
        autor: 'ANDREWS',
        nombre: 'JARDIN SOMBRIO',
        genero: 'FICCION',
        año: 1986,
        precio: 16000,
    },
    {
        autor: 'ZAFON',
        nombre: 'LA SOMBRA DEL VIENTO',
        genero: 'NOVELA',
        año: 2001,
        precio: 21000,
    },
    {
        autor: 'ZAFON',
        nombre: 'EL JUEGO DEL ANGEL',
        genero: 'NOVELA',
        año: 2008,
        precio: 20000,
    },
    {
        autor: 'ZAFON',
        nombre: 'EL PRISIONERO DEL CIELO',
        genero: 'NOVELA',
        año: 2011,
        precio: 20000,
    },
    {
        autor: 'ZAFON',
        nombre: 'EL LABERINTO DE LOS ESPIRITUS',
        genero: 'NOVELA',
        año: 2016,
        precio: 25000,
    },
    {
        autor: 'ZAFON',
        nombre: 'MARINA',
        genero: 'NOVELA',
        año: 1999,
        precio: 15000,
    },
    {
        autor: 'ALLENDE',
        nombre: 'LA CASA DE LOS ESPIRITUS',
        genero: 'NOVELA',
        año: 1982,
        precio: 15000,
    },
    {
        autor: 'ALLENDE',
        nombre: 'DE AMOR Y DE SOMBRA',
        genero: 'NOVELA',
        año: 1984,
        precio: 11000,
    },
    {
        autor: 'ALLENDE',
        nombre: 'PAULA',
        genero: 'NOVELA',
        año: 1994,
        precio: 15000,
    },
    {
        autor: 'ALLENDE',
        nombre: 'HIJA DE LA FORTUNA',
        genero: 'NOVELA',
        año: 1999,
        precio: 19500,
    },
    {
        autor: 'ALLENDE',
        nombre: 'RETRATO EN SEPIA',
        genero: 'Novela',
        año: 2000,
        precio: 15500,
    },
    {
        autor: 'ALLENDE',
        nombre: 'LA CIUDAD DE LAS BESTIAS',
        genero: 'NOVELA',
        año: 2002,
        precio: 13000,
    },
    {
        autor: 'ALLENDE',
        nombre: 'LA SUMA DE LOS DIAS',
        genero: 'NOVELA',
        año: 2007,
        precio: 17000,
    },
    {
        autor: 'ALLENDE',
        nombre: 'INES DEL ALMA MIA',
        genero: 'NOVELA',
        año: 2006,
        precio: 17000,
    },
    {
        autor: 'ALLENDE',
        nombre: 'LA ISLA BAJO EL MAR',
        genero: 'NOVELA',
        año: 2009,
        precio: 13000,
    },
    {
        autor:'ALLENDE',
        nombre: 'AMOR',
        genero: 'NOVELA',
        año: 2012,
        precio: 13000,
    }
];

/*Ingreso de Datos para filtrar por Interes*/

let autor = prompt("Ingresar Autor: ANDREWS, ZAFON O ALLENDE (En Mayúscula😝)")
let minimo = Number(prompt("Ingresar Precio Minimo (Opcional😉)")) 
let maximo = Number(prompt("Ingresar Precio Maximo (Opcional😉)"))


const datosBusqueda = {
    autor: autor,
    minimo: minimo,
    maximo: maximo
}

/*Desglose de libros en consola con sus respectivos datos*/

function mostrarLibros(libros){
    libros.forEach( libro => {
        console.log(
        `Autor: ${libro.autor} 
        Nombre del Libro: ${libro.nombre} 
        Genero Literario: ${libro.genero} 
        Año de Publicación: ${libro.año} 
        Precio de Venta: ${libro.precio}`)
    })
}

/*Filtros a considerar de acuerdo a resultados ingresados*/

function filtrarLibro(){
    const resultado = libros.filter(filtrarAutor).filter(filtrarMinimo).filter(filtrarMaximo);
    if(resultado.length){
        mostrarLibros(resultado);
    }else {
        console.log("No se encuentran libros disponibles de acuerdo a tu busqueda");
    }
}

/*Filtro por Autor*/

function filtrarAutor(libro){
    if(datosBusqueda.autor){
        return libro.autor === datosBusqueda.autor;
    }
    return libro;
}

/*Filtrar por Precio Minimo*/

function filtrarMinimo(libro){
    if(datosBusqueda.minimo){
        return libro.precio >= datosBusqueda.minimo;
    }
    return libro;
}

/*Filtrar por Precio Maximo*/

function filtrarMaximo(libro){
    if(datosBusqueda.maximo){
        return libro.precio <= datosBusqueda.maximo;
    }
    return libro;
}

/*Visualizacion de libros*/

console.log("¡Gracias por tu búsqueda!")
filtrarLibro(libros)

