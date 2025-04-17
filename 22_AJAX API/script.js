// let xhr = new XMLHttpRequest();
// xhr.open("GET", "https://dummyjson.com/users");
// xhr.onload = function () {
//   if (xhr.status === 200) {
//     console.log("Response:", xhr.responseText);
//   }
// };
// xhr.send();


let tableTag = document.getElementById("tab");

let URL = "https://dummyjson.com/users";

async function fetchDetails() {
    let response = await fetch(URL);
    let data = await response.json();

    data.users.forEach((user) => {
        let tableRow = document.createElement("tr");
        tableRow.classList.add("")
        tableRow.innerHTML = `
        
        <td class="">${user.id}</td>
        <td>${user.firstName} ${user.lastName}</td>
        `;
        tableTag.appendChild(tableRow);  
    });
}