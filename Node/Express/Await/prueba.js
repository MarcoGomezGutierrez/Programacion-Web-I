import fetch from 'node-fetch';

async function obtenerJsonConAsync() {
	try {
		let respuesta = await fetch("https://httpbin.org/json")
		let json = await respuesta.json();
        console.log("debajo de await")
        console.log(json);
        console.log("debajo de json")

		return json;
	} catch (e) {
		console.log("Error: ", e)
	}
}

obtenerJsonConAsync();