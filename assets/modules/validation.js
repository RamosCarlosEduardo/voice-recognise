function numValidation(chute) {
	let numero = +chute
	
	console.log(numSorteado)
	if (Number.isNaN(numero)){
		console.log('invalido')
	}

	if (numero < min || numero > max) {
		console.log('fora do intervalo')
	}

	if (numero == numSorteado) {
		console.log('acertou')
	}
}