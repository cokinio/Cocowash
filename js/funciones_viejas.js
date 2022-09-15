//funcion utlizada para crear un carrito de demostracion sin solicitar datos al usuario
function armoClienteDemo() {
	const carrito = [
		{ id: 1, descripcion: "remera", precio: 250, talle: "s", color: "rojo" },
		{ id: 1, descripcion: "remera", precio: 250, talle: "l", color: "blanco" },
		{ id: 2, descripcion: "pantalon", precio: 500, talle: "m", color: "negro" },
		{ id: 3, descripcion: "buzo", precio: 700, talle: "s", color: "violeta" },
		{ id: 2, descripcion: "pantalon", precio: 500, talle: "m", color: "azul" },
		{ id: 1, descripcion: "remera", precio: 250, talle: "xl", color: "marron" },
	];

	const cliente1 = new Cliente("pedro", "gonzales", carrito);
	return cliente1;
}

//funcion utilizada para crear cliente mediante prompt
function obtengoDatos() {
	let nombre = prompt("Ingrese su nombre");
	let apellido = prompt("Ingrese su apellido");
	let carrito = [];
	let cliente1 = new Cliente(nombre, apellido, carrito);
	cliente1 = realizarPedido(cliente1);
	return cliente1;
}

// funcion utilizada para armar carrito mediante prompt
function realizarPedido(cliente1) {
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

//devuelve mensaje
function escribirMensaje(
	cliente1,
	cantidadProductos,
	cantidades,
	singular,
	plural
) {
	let mensaje =
		"El cliente " + cliente1.nombre + " " + cliente1.apellido + " desea lavar ";
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
