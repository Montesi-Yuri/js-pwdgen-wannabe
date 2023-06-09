
// JAVASCRIPT

const NameFromPrompt = prompt ('Inserisci il tuo nome')

document.getElementById('Name').innerHTML = NameFromPrompt;

console.log ("name check")


const SurnameFromPrompt = prompt ('Inserisci il tuo cognome')

document.getElementById('Surname').innerHTML = SurnameFromPrompt;

console.log ("surname check")


const ColorFromPrompt = prompt ('Inserisci il tuo colore preferito')

document.getElementById('Color').innerHTML = ColorFromPrompt;

console.log ("color check")


let YourPassword = (NameFromPrompt + SurnameFromPrompt + ColorFromPrompt + 101)

document.getElementById('New-password').innerHTML = YourPassword;

console.log ("password check")