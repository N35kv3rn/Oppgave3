// Oppgave 1
document.getElementById("remove-btn").onclick = () => {
	document.getElementById("remove").style.display = "none";
}

// Oppgave 2
document.getElementById("change-btn").onclick = () => {
	document.getElementById("change").innerHTML = "Teksten er endret";
}

// Oppgave 3
document.getElementById("input").addEventListener('keyup', event => {
	let input = document.getElementById("input").value;
	document.getElementById("input-text").innerHTML = input;
});

// Oppgave 4
const myList = ['item one', 'item two', 'item three'];
const ul = document.getElementById("ul");
const wrtBtn = document.getElementById("write-list");

wrtBtn.addEventListener('click', () => {
	myList.forEach((listElement) => (ul.innerHTML += `<li>${listElement}</li>`));
});

// Oppgave 5
const placeholder = document.getElementById("placeholder");
const button = document.getElementById("create");
const select = document.getElementById("select");
const text = document.getElementById("text");

button.addEventListener('click', () => {
	placeholder.innerHTML += `<${select.value}>${text.value}</${select.value}>`
});

// Oppgave 6
const removeKnapp = document.getElementById("remove-li");
const removeUL = document.getElementById("list");

removeKnapp.addEventListener('click', () => {
	if (removeUL.lastElementChild) {
		removeUL.removeChild(removeUL.lastElementChild);
	}
});

// Oppgave 7
const nameBox = document.getElementById("name");
const disableBtn = document.getElementById("order");

nameBox.addEventListener('keyup', () => {
	if (nameBox.value && nameBox.value.length >= 4) {
		disableBtn.disabled = true;
		disableBtn.style = "border: 1px solid red";
	} else {
		disableBtn.disabled = false;
		disableBtn.style = "border: default";
	}
});

// Oppgave 8
const color = document.getElementById("color");
const barneList = document.querySelector(".children");
const barneListUl = barneList.querySelectorAll('li');

color.addEventListener('click', () => {
	Array.from(barneListUl).forEach((li, index) => {
    if ((index + 1) % 2 === 0) {
      li.style = 'border: 5px dotted pink; margin: 5px;';
    } else {
      li.style = 'border: 5px solid green; margin: 5px;';
    }
  });
});
