
// let gombs = document.getElementById('goomsCaught').value;
// let bobs = document.getElementById('bobsCaught').value;
// let cheeps = document.getElementById('cheepsCaught').value;
// let total = +gombs + +bobs + +cheeps;

function totFunc(){
	let gombs = document.getElementById("goomsCaught").value * 5
	let bobs = document.getElementById("bobsCaught").value * 7
	let cheeps = document.getElementById("cheepsCaught").value * 11
	let total = +gombs + +bobs + +cheeps;
document.getElementById('total').innerText = total;
}
document.getElementById('submitTotal').addEventListener('click', function(){
	totFunc();
})


// document.getElementById("goomsCaught").addEventListener("change", totFunc())
// document.getElementById("bobsCaught").addEventListener("change", totFunc())
// document.getElementById("cheepsCaught").addEventListener("change", totFunc())
