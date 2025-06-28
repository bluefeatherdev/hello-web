// JavaScript for demo058.html

// Users objects
let users = [
    {firstName:"John", lastName:"Doe", address:"Street 16"},
    {firstName:"Eliot", lastName:"Brown", address:"Street 17"},
    {firstName:"Elie", lastName:"Sweets", address:"Street 23"},
];

// Table body element
let tableBody = document.getElementById("table-body");

// List users arrow function
let i = 1;
const listUsers = () => {
    let usersString = "";
    for (let i = 0; i < users.length; i++) {
        usersString += `<tr><th scope="row">${i+1}</th><td>${users[i].firstName}</td><td>${users[i].lastName}</td><td>${users[i].address}</td></tr>`
    }
    tableBody.innerHTML = usersString;
    console.log(usersString);
};

// Add user arrow function
const addUser = () => {
    const firstName = document.getElementById("nombre").value;
    const lastName =document.getElementById("apellido").value;
    const address =document.getElementById("direccion").value;

    if (!firstName) return alert('First name is empty...');
    if (!lastName) return alert('Last name is empty...');
    if (!address) return alert('Address is empty...');

    i = users.length + 1;
    tableBody.innerHTML+=`<tr><th scope="row">${i}</th><td>${firstName}</td><td>${lastName}</td><td>${address}</td></tr>`;

    const newUser = {firstName, lastName, address};
    users.push(newUser);
    console.log(users);
};
