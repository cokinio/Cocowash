// El programa calcula el costo de lavar distintas prendas en la lavanderia incluyendo el costo de envio

////////////////////////////////////////////Defino las Clases//////////////////////////////////////

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
	constructor(nombre, apellido, carrito, email = "") {
		this.nombre = nombre;
		this.apellido = apellido;
		this.email = email;
		this.carrito = carrito;
	}
}
//////////////////////////////////////////// constantes - Defino tipos de prendas//////////////////////////

const tipos = ["Remera", "Pantalon", "Buzo"];
const cantidadProductos = tipos.length;
const singular = [" pantalon ", " remera ", " buzo "];
const plural = [" pantalones ", " remeras ", " buzos "];
console.log(...tipos)

//////////////////////////////////////////Defino las Funciones//////////////////////////////////////////

let esPantalon = (prenda) => {return prenda.descripcion === "pantalon";}

let esRemera = (prenda) => { return prenda.descripcion === "remera"}

let esBuzo = (prenda) => { return prenda.descripcion === "buzo"}

let funTotal = (carrito) => {
	const total = carrito.reduce((acc, el) => acc + el.precio, 0);
	return total;
}

// escribe mensaje en inner html
function escribirMensajeHtml(
	cliente1,
	cantidades,
	carritoHtml
) {
	linea = [];
	let mensaje = "";
	for (i = 0; i < cantidadProductos; i++) {
		let mensaje = "";
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
		linea[i] = mensaje;
		
	}
	//////// desestructuracion
	let {nombre,apellido}=cliente1;
	let texto = `<p>Sr. ${nombre} ${apellido},su pedido es:</p>
				<ul>
					<li>${linea[0]}</li>
					<li>${linea[1]}</li>
					<li>${linea[2]}</li>
				</ul>
				<p>Por un monto total de $ ${funTotal(cliente1.carrito)}
				<div class="col-md-4">
						<button
							type="button"
							class="btn btn-lg bg-gris"
							id="botonContinuarCompra"
						>
							Continuar con la compra
						</button>
					</div>
				
				`;

	carritoHtml.innerHTML = texto;
}

//agrego selects al form en funcion de las cantidades que elige el usuario
function sumaryRestar(selector, id, tipo) {
	if (selector == 0) {
		let cant = document.querySelector(id).value;
		cant++;
		document.querySelector(id).value = cant;
		let texto = `<div class="row" id=${tipo}${cant}>
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
			</div>`;
		let division = `#desplegable${tipo}`;
		document.querySelector(division).innerHTML += texto;
	} else {
		let cant = document.querySelector(id).value;
		if (cant > 0) {
			cant--;
			document.querySelector(id).value = cant;
			let desplegable = document.querySelector(`#desplegable${tipo}`);
			desplegable.removeChild(desplegable.lastChild);
		}
	}
}

//armo carrito con los datos del html
function datosDelForm(event) {
	event.preventDefault();
	// uso or /////////////////
	let formulario = document.querySelector("#formulario");
	let nombre = formulario.nombre.value || "________";
	let apellido = formulario.apellido.value || "________";
	let email = formulario.mail1.value || "________";
	let carrito = [];
	let cliente1 = new Cliente(nombre, apellido, carrito, email);
	let cantRemeras = formulario.cantRemeras.value || 0;
	let cantPantalones = formulario.cantPantalon.value || 0;
	let cantBuzos = formulario.cantBuzo.value || 0;
	let cantidades = [cantRemeras, cantPantalones, cantBuzos];
	let objeto1;
	for (i = 0; i < cantidadProductos; i++) {
		for (j = 1; j <= cantidades[i]; j++) {
			let talle = document.querySelector(`#talle${tipos[i]}${j}`).value;
			let color = document.querySelector(`#color${tipos[i]}${j}`).value;
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
	console.log(cliente1);
	let arrPantalon = cliente1.carrito.filter(esPantalon);
	let arrRemera = cliente1.carrito.filter(esRemera);
	let arrBuzo = cliente1.carrito.filter(esBuzo);
	modal.style.display = "block";
	let cantidades1 = [arrPantalon, arrRemera, arrBuzo];
	// let cantidadesEnJson=JSON.stringify(cantidades1);
	// localStorage.setItem("cantidades",cantidadesEnJson );
	// let clienteEnJson=JSON.stringify(cliente1);
	// localStorage.setItem("cliente",clienteEnJson );
	escriboModal(cantidades1,cliente1);
}

function escriboModal(cantidades,cliente1){
	let carritoHtml = document.querySelector("#myModal div p");
	// let cantidades= JSON.parse(localStorage.getItem("cantidades"));
	// let cliente1= JSON.parse(localStorage.getItem("cliente"));
	escribirMensajeHtml(cliente1,cantidades,carritoHtml);
	let botonContinuarCompra = document.getElementById("botonContinuarCompra");
	botonContinuarCompra.addEventListener("click", console.log("anda"));
	}

function borrarHtml(){
	let tipo=["Remera","Pantalon","Buzo"];
	let division;
	for (i=0; i<tipo.length;i++){
		division = `#desplegable${tipo[i]}`;
		document.querySelector(division).innerHTML ="";
	}
}

// /////////////////////////// eventos de botones ////////////////////////////////////////////////////////

let botonMasRemera = document.getElementById("botonMasRemera");
botonMasRemera.addEventListener("click", function () {
	sumaryRestar(0, "#cantRemeras", "Remera");
});
let botonMenosRemera = document.getElementById("botonMenosRemera");
botonMenosRemera.addEventListener("click", function () {
	sumaryRestar(1, "#cantRemeras", "Remera");
});

let botonMasPantalon = document.getElementById("botonMasPantalon");
botonMasPantalon.addEventListener("click", function () {
	sumaryRestar(0, "#cantPantalon", "Pantalon");
});
let botonMenosPantalon = document.getElementById("botonMenosPantalon");
botonMenosPantalon.addEventListener("click", function () {
	sumaryRestar(1, "#cantPantalon", "Pantalon");
});

let botonMasBuzo = document.getElementById("botonMasBuzo");
botonMasBuzo.addEventListener("click", function () {
	sumaryRestar(0, "#cantBuzo", "Buzo");
});
let botonMenosBuzo = document.getElementById("botonMenosBuzo");
botonMenosBuzo.addEventListener("click", function () {
	sumaryRestar(1, "#cantBuzo", "Buzo");
});



let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
	modal.style.display = "none";
};

// cierro modal cuando el usuario clickea dentro del cuadro
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};


