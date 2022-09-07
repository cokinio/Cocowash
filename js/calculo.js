// El programa calcula el costo de lavar distintas prendas en la lavanderia incluyendo el costo de envio

//Defino las Clases
class Remera {
	constructor(talle, color) {
		this.id = 1;
		this.descripcion = "remera";
		this.precio = 250;
		this.talle = talle;
		this.color = color;
	}
}

class Pantalon {
	constructor(talle, color) {
		this.id = 2;
		this.descripcion = "pantalon";
		this.precio = 500;
		this.talle = talle;
		this.color = color;
	}
}

class Buzo {
	constructor(talle, color) {
		this.id = 3;
		this.descripcion = "buzo";
		this.precio = 450;
		this.talle = talle;
		this.color = color;
	}
}

class Cliente {
	constructor(nombre, apellido,carrito, email="") {
		this.nombre = nombre;
		this.apellido = apellido;
		this.email = email;
		this.carrito = carrito;
	}
}

function armoClienteDemo(){
	const carrito = [
		{id:1, descripcion:"remera", precio:250, talle:"s", color:"rojo"},
		{id:1, descripcion:"remera", precio:250, talle:"l", color:"blanco"},
		{id:2, descripcion:"pantalon", precio:500, talle:"m", color:"negro"},
		{id:3, descripcion:"buzo", precio:700, talle:"s", color:"violeta"},
		{id:2, descripcion:"pantalon", precio:500, talle:"m", color:"azul"},
		{id:1, descripcion:"remera", precio:250, talle:"xl", color:"marron"},
	];
	
	const cliente1 = new Cliente("pedro","gonzales",carrito);
	return cliente1;
}


// Defino las Funciones
function esPantalon(prenda) {
	return prenda.descripcion === "pantalon";
}

function esRemera(prenda) {
	return prenda.descripcion === "remera";
}

function esBuzo(prenda) {
	return prenda.descripcion === "buzo";
}

function funTotal(carrito) {
	const total = carrito.reduce((acc, el) => acc + el.precio, 0);
	return total;
}

function realizarPedido(cliente1){
	////consulto por remeras
	
	cantRemeras = parseInt(
		prompt("Ingrese la cantidad de remeras que desea lavar")
	);
	
	for (i = 0; i < cantRemeras; i++) {
		talle = prompt(
			"Ingrese el talle de la remera. Puede ser small [s], medium [m] o large [l]. Deberá utilizar la letra indicada dentro de los corchetes para indicar el talle"
		);
		while (talle != "s" && talle != "m" && talle != "l") {
			talle = prompt(
				"Parametro incorrecto, ingrese nuevamente el talle de la remera. Puede ser s, m o l"
			);
		}
		color = prompt("Ingrese el color de la remera");
		const remera1 = new Remera(talle, color);
		cliente1.carrito.push(remera1);
	}
	
	//consulto por pantalones
	cantPantalones = parseInt(
		prompt("Ingrese la cantidad de pantalones que desea lavar")
	);
	
	for (i = 0; i < cantPantalones; i++) {
		talle = prompt(
			"Ingrese el talle del pantalon. Puede ser small [s], medium [m] o large [l]. Deberá utilizar la letra indicada dentro de los corchetes para indicar el talle"
		);
		while (talle != "s" && talle != "m" && talle != "l") {
			talle = prompt(
				"Parametro incorrecto, ingrese nuevamente el talle del pantalon. puede ser s, m o l"
			);
		}
		color = prompt("Ingrese el color del pantalon");
		const pantalon1 = new Pantalon(talle, color);
		cliente1.carrito.push(pantalon1);
	}
	
	//consulto por Buzos
	cantBuzos = parseInt(prompt("Ingrese la cantidad de buzos que desea lavar"));
	
	for (i = 0; i < cantBuzos; i++) {
		talle = prompt(
			"Ingrese el talle del buzo. Puede ser small [s], medium [m] o large [l]. Deberá utilizar la letra indicada dentro de los corchetes para indicar el talle"
		);
		while (talle != "s" && talle != "m" && talle != "l") {
			talle = prompt(
				"Parametro incorrecto, ingrese nuevamente el talle de la remera. puede ser s, m o l"
			);
		}
		color = prompt("Ingrese el color del buzo");
		const buzo1 = new Buzo(talle, color);
		cliente1.carrito.push(buzo1);
	}

	return cliente1;
}

function escribirMensaje(cliente1,cantidadProductos,cantidades,singular,plural){

	let mensaje ="El cliente " + cliente1.nombre + " " + cliente1.apellido + " desea lavar ";
	for (i = 0; i < cantidadProductos; i++) {
		if (cantidades[i].length == 0) {
			mensaje = mensaje + cantidades[i].length + plural[i];
		} else if (cantidades[i].length == 1) {
			mensaje =
				mensaje +
				cantidades[i].length +
				singular[i] +
				"de color " +
				cantidades[i][0].color;
		} else {
			mensaje = mensaje + cantidades[i].length + plural[i] + "de colores ";
			for (j = 0; j < cantidades[i].length; j++) {
				if (j < cantidades[i].length - 2) {
					mensaje = mensaje + cantidades[i][j].color + ", ";
				} else if (j < cantidades[i].length - 1) {
					mensaje = mensaje + cantidades[i][j].color + " y ";
				} else {
					mensaje = mensaje + cantidades[i][j].color;
				}
			}
		}
		// veo si poner coma ,y , o espacio en el mensaje
		if (i < cantidadProductos - 2) {
			mensaje = mensaje + ", ";
		} else if (i < cantidadProductos - 1) {
			mensaje = mensaje + " y ";
		} else {
			mensaje = mensaje + " ";
		}
		
	}
	mensaje = mensaje + "por un total de $" + funTotal(cliente1.carrito);
	return mensaje;
	}

function escribirMensajeHtml(cliente1,cantidadProductos,cantidades,singular,plural,carritoHtml){
	
	linea=[];
	let mensaje="";
	for (i = 0; i < cantidadProductos; i++) {
		let mensaje="";
		if (cantidades[i].length == 0) {
			mensaje = mensaje + cantidades[i].length + plural[i];
		} else if (cantidades[i].length == 1) {
			mensaje =
				mensaje +
				cantidades[i].length +
				singular[i] +
				"de color " +
				cantidades[i][0].color;
		} else {
			mensaje = mensaje + cantidades[i].length + plural[i] + "de colores ";
			for (j = 0; j < cantidades[i].length; j++) {
				if (j < cantidades[i].length - 2) {
					mensaje = mensaje + cantidades[i][j].color + ", ";
				} else if (j < cantidades[i].length - 1) {
					mensaje = mensaje + cantidades[i][j].color + " y ";
				} else {
					mensaje = mensaje + cantidades[i][j].color;
				}
			}
		}
		linea[i]=mensaje;
		console.log(mensaje);
	}
	
	let texto = `<p>El pedido de ${cliente1.nombre} ${cliente1.apellido} es:</p>
				<ul>
					<li>${linea[0]}</li>
					<li>${linea[1]}</li>
					<li>${linea[2]}</li>
				</ul>
				<p>Por un monto total de ${funTotal(cliente1.carrito)}`;

	carritoHtml.innerHTML =texto;
}


/// inicio de programa
// alert(
// 	"En este programa le cotizaremos las prendas que desea lavar en base a su descripción"
// );

function obtengoDatos(){
	let nombre = prompt("Ingrese su nombre");
	let apellido = prompt("Ingrese su apellido");
	let carrito = [];
	let cliente1 = new Cliente(nombre, apellido, carrito);
	cliente1=realizarPedido(cliente1);
	return cliente1;
}

function sumaryRestar(selector,id,tipo){

	if (selector==0){
		let cant = document.querySelector(id).value;
		cant++;
		document.querySelector(id).value = cant;
		let texto= `<div class="row" id=${tipo}${cant}>
				<div class="col-md-3">
					<label for="talle" class="form-label">Talle</label>
				</div>
				<div class="col-md-3">
					<select id="talle${tipo}${cant}" class="form-select">
						<option selected value="small">Small</option>
						<option value="medium">Medium</option>
						<option value="large">Large</option>
					</select>
				</div>
				<div class="col-md-3">
					<label for="color" class="form-label">Color</label>
				</div>
				<div class="col-md-3">
					<select id="color${tipo}${cant}" class="form-select">
						<option selected value="azul">Azul</option>
						<option value="negro">Negro</option>
						<option value="marron">Marrón</option>
						<option value="gris">Gris</option>
						<option value="verde">Verde</option>
						<option value="rosa">Rosa</option>
						<option value="rojo">Rojo</option>
						<option value="blanco">Blanco</option>
						<option value="Amarillo">Amarillo</option>
						<option value="otro">Otro</option>
					</select>
				</div>
			</div>`	;
		let division=`#desplegable${tipo}`;
		document.querySelector(division).innerHTML+=texto;
	}
	else{
		let cant = document.querySelector(id).value;
		if (cant>0){
			cant--;
			document.querySelector(id).value = cant;
			let desplegable=document.querySelector(`#desplegable${tipo}`);
			desplegable.removeChild(desplegable.lastChild);;
		}
	}
}

function datosDelForm(event){
	event.preventDefault();
	let formulario = document.querySelector("#formulario");
	let nombre = formulario.nombre.value;
	let apellido =  formulario.apellido.value;
	let email = formulario.mail1.value;
	let carrito = [];
	cliente1 = new Cliente(nombre, apellido, carrito,email);
	let cantRemeras =  formulario.cantRemeras.value;
	let cantPantalones =  formulario.cantPantalon.value;
	let cantBuzos =  formulario.cantBuzo.value;
	let cantidades = [cantRemeras, cantPantalones,cantBuzos];
	let tipos = ["Remera","Pantalon","Buzo"];
	let objeto1;

	for (i=0; i<tipos.length; i++){
		for (j=1; j<=cantidades[i]; j++){
			let talle=  document.querySelector(`#talle${tipos[i]}${j}`).value;
			let color=  document.querySelector(`#color${tipos[i]}${j}`).value;
			switch (i) {
				case 0:
					objeto1 = new Remera(talle, color);
					cliente1.carrito.push(objeto1);
					break;
				case 1:
					objeto1 = new Pantalon(talle, color);
					cliente1.carrito.push(objeto1);
					break;
				case 2:
					objeto1 = new Buzo(talle, color);
					cliente1.carrito.push(objeto1);
					break;
			}
			
		}
	}
	let arrPantalon = cliente1.carrito.filter(esPantalon);
	console.log(arrPantalon)
	let arrRemera = cliente1.carrito.filter(esRemera);
	let arrBuzo = cliente1.carrito.filter(esBuzo);
	const cantidadProductos = 3;
	let cantidades1 = [arrPantalon, arrRemera, arrBuzo],
	singular = [" pantalon ", " remera ", " buzo "],
	plural = [" pantalones ", " remeras ", " buzos "];
	let carritoHtml = document.querySelector("#carrito");
	escribirMensajeHtml(cliente1,cantidadProductos,cantidades1,singular,plural,carritoHtml);
}



//inico de programa

// let cliente1;
//const cliente1=obtengoDatos();
//const cliente1=armoClienteDemo();

// let arrPantalon = cliente1.carrito.filter(esPantalon);
// console.log(arrPantalon)
// let arrRemera = cliente1.carrito.filter(esRemera);
// let arrBuzo = cliente1.carrito.filter(esBuzo);
// const cantidadProductos = 3;
// let cantidades = [arrPantalon, arrRemera, arrBuzo],
// 	singular = [" pantalon ", " remera ", " buzo "],
// 	plural = [" pantalones ", " remeras ", " buzos "];

let botonMasRemera = document.getElementById("botonMasRemera");
botonMasRemera.addEventListener("click", function(){sumaryRestar(0,"#cantRemeras","Remera")});
let botonMenosRemera = document.getElementById("botonMenosRemera");
botonMenosRemera.addEventListener("click", function(){sumaryRestar(1,"#cantRemeras","Remera")});

let botonMasPantalon = document.getElementById("botonMasPantalon");
botonMasPantalon.addEventListener("click", function(){sumaryRestar(0,"#cantPantalon","Pantalon")});
let botonMenosPantalon = document.getElementById("botonMenosPantalon");
botonMenosPantalon.addEventListener("click", function(){sumaryRestar(1,"#cantPantalon","Pantalon")});


let botonMasBuzo = document.getElementById("botonMasBuzo");
botonMasBuzo.addEventListener("click", function(){sumaryRestar(0,"#cantBuzo","Buzo")});
let botonMenosBuzo = document.getElementById("botonMenosBuzo");
botonMenosBuzo.addEventListener("click", function(){sumaryRestar(1,"#cantBuzo","Buzo")});

// let botonSubmit = document.getElementById("submit");
// botonSubmit.addEventListener("click", cliente1=datosDelForm());

// mensaje1=escribirMensaje(cliente1,cantidadProductos,cantidades,singular,plural);
// alert(mensaje1);

// let carritoHtml = document.querySelector("#carrito");
// escribirMensajeHtml(cliente1,cantidadProductos,cantidades,singular,plural,carritoHtml);




