const min = 1
const max = 3

document.querySelector('[data-min]').textContent = min
document.querySelector('[data-max]').textContent = max

const sorteiaNum = () => {

	return parseInt(Math.random() * (max - min) + min)
}

numSorteado = sorteiaNum()
console.log(numSorteado)