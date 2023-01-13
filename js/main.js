addEventListener("DOMContentLoaded", ev => {

	console.log("Contenido del DOM cargado")

	const seleccionarArea = document.querySelector("textarea")

	seleccionarArea.innerHTML = `<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>`
	
	seleccionarArea.addEventListener("input", ev =>{
		const button = document.querySelector("button")
		const nodoInput = document.querySelectorAll("input")

		nodoInput.forEach(element => {
			element.removeAttribute("disabled")
		});

		button.removeAttribute("disabled")
	})

	const botonReemplazo = document.querySelector("#btn-reemplazar")
	const div = document.querySelector("div")
	let arrayTextArea = []
	
	botonReemplazo.addEventListener("click", ev => {
		div.innerHTML = seleccionarArea.value
		
		arrayTextArea = []
	})

	const botonAgregar = document.querySelector(".btn-agregar")
	

	botonAgregar.addEventListener("click", ev => {
		arrayTextArea.push(seleccionarArea.value)
		
		div.innerHTML = arrayTextArea.join(" ")
	})

	const botonAgregarCinco = document.querySelector("input[value='Agregar 5 veces']")
	const botonAgregarDiez = document.querySelector("input[value='Agregar 10 veces']")

	const botonN = function(x){
		for(let i = 0; i < x; i ++){
			arrayTextArea.push (seleccionarArea.value)
		}
		div.innerHTML = arrayTextArea.join(" ")
	
	}
	
	botonAgregarCinco.addEventListener("click", ev =>{
		botonN(5)
	})
	botonAgregarDiez.addEventListener("click", ev =>{
		botonN(10)
	})

	const botonAgregarNVeces = document.querySelector("input[value = 'Agregar n veces']")

	botonAgregarNVeces.addEventListener("click", ev =>{
		let preguntaAlUsuario = prompt("¿Elija cantidades?")
		while (preguntaAlUsuario === null || /\D/.test(preguntaAlUsuario) || preguntaAlUsuario === "") {
			preguntaAlUsuario = prompt("Debes ingresar un número");
		};
		botonN(preguntaAlUsuario)	
	})
	
	const botonVaciar = document.querySelector(".btn-vaciar")

	botonVaciar.addEventListener("click", ev => {
		div.innerHTML = " "
		arrayTextArea = []
	})

	const convertirMayus = document.querySelector(".btn-convertir-a-mayusculas")

	convertirMayus.addEventListener("click", ev => {
		valorDiv = document.querySelector("div").innerText
		div.innerHTML = valorDiv.toUpperCase()		
	})

	const convertirMinus = document.querySelector("button")

	convertirMinus.addEventListener("click", ev => {
		div.innerHTML = valorDiv.toLowerCase()
	})

	const seleccionarLi = document.querySelectorAll("li")
	
	seleccionarLi.forEach(item => {
		item.innerText = `[OK] ${item.innerText}`
	})
})






