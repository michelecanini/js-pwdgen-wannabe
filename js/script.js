//PASSWORD GENERATOR SETTING

let name_one = prompt ('Quale è il tuo nome?');
let lastname_two = prompt ('Quale è il tuo cognome?');
let favorite_color_three = prompt ('Quale è il tuo colore preferito?');

let new_password = name_one + lastname_two + favorite_color_three +21; 

document.getElementById('password').innerHTML = `La tua nuova password (non sicura) è: ${new_password}`;

document.getElementById('hello_user').innerHTML += ' ' +name_one + ' ' +lastname_two;
console.log(`Ciao ${name_one}`)