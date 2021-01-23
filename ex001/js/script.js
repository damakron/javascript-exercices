document.getElementById("rdbSoma").onclick = function() {
	let button = window.document.querySelector('input#btnResult')
	button.setAttribute('value', 'Somar');
}
document.getElementById("rdbSubtracao").onclick = function() {
	let button = window.document.querySelector('input#btnResult')
	button.setAttribute('value', 'Subtrair');
}
document.getElementById("rdbDivisao").onclick = function() {
	let button = window.document.querySelector('input#btnResult')
	button.setAttribute('value', 'Dividir');
}
document.getElementById("rdbMultiplicacao").onclick = function() {
	let button = window.document.querySelector('input#btnResult')
	button.setAttribute('value', 'Multiplicar');
}
document.getElementById("btnResult").onclick = function() {
	let n1 = Number(window.document.querySelector('input#txtN1').value)
	let n2 = Number(window.document.querySelector('input#txtN2').value)

	let result = document.querySelector('.result p')

	var resultado = 0;
	if (document.getElementsByName('op')[0].checked) {
		resultado = n1 + n2
		result.innerHTML = `${n1} + ${n2} = <strong>${resultado}</strong>`

	} else if (document.getElementsByName('op')[1].checked) {
		resultado = n1 - n2
		result.innerHTML = `${n1} - ${n2} = <strong>${resultado}</strong>`

	} else if (document.getElementsByName('op')[2].checked) {
		resultado = n1 / n2
		result.innerHTML = `${n1} / ${n2} = <strong>${resultado}</strong>`

	} else if (document.getElementsByName('op')[3].checked) {
		resultado = n1 * n2
		result.innerHTML = `${n1} x ${n2} = <strong>${resultado}</strong>`
	}
}