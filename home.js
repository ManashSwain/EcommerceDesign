// Function to get the navbar in smaller screen devices 

let bar = document.getElementById("bar");
let navbar = document.getElementById("navbar");

function togglebar() {
    navbar.classList.add('activate');
}

// Function to close the navbar in smaller screen devices 

let close = document.getElementById("close");

function closebar() {
    navbar.classList.remove('activate');
}
