const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak (e) {
	let box = document.querySelector('.box')
	let chute = e.results[0][0].transcript
	box.textContent = chute

	numValidation(chute)
}