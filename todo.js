const h1 = document.getElementsByTagName("h1");
for (const h1Style of h1) {
    h1Style.addEventListener('mouseover', () => {
        //h1Style.innerText = "this is to-do-list";
        h1Style.style.color = "red";
    });
    h1Style.addEventListener('mouseout', () => {
        //h1Style.innerText = "this is to-do-list";
        //h1Style.style.color = "black";
    });
}
let count = 0;
const addButton = document.getElementById("input-btn").addEventListener("click", () => {
    count++;
    const value1 = document.getElementById("input-value1").value;
    const value2 = document.getElementById("input-value2").value;
    if (value1 === null && value2 === null) {
        alert("please input value");
    }
    const tableContainer = document.getElementById("content-container");
    const tableRowContainer = document.createElement("tr");
    tableRowContainer.innerHTML = `
    <td>${count}</td>
    <td>${value1}</td>
    <td>${value2}</td>
    <td>
    <button class="btn btn-primary delete-btn">Delete</button>
    <button class="btn btn-secondary edit-btn">Edit</button>
    </td>
    `;
    tableContainer.appendChild(tableRowContainer);
    document.getElementById("input-value1").value = "";
    document.getElementById("input-value2").value = "";
    value2.value = "";
    const deleteBtn = document.getElementsByClassName("delete-btn");
    for (let button of deleteBtn) {
        button.addEventListener("click", function (event) {
            event.target.parentNode.parentNode.style.display = "none";
            console.log(event.target.parentNode.parentNode);
        });
    }
    const editBtn = document.getElementsByClassName("edit-btn");
    for (let edit of editBtn) {
        edit.addEventListener("click", (event) => {
            console.log(document.getElementsByTagName(event.target.parentNode.parentNode.innerText));

        })
    }
});
// const deleteBtn = document.getElementsByClassName("delete-btn");
// console.log(deleteBtn);