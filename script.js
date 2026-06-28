const submit = document.getElementById("submit");
const bookList = document.getElementById("book-list");

submit.addEventListener("click", function () {

    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const isbn = document.getElementById("isbn").value.trim();

    if (title === "" || author === "" || isbn === "") {
        return;
    }

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">X</button></td>
    `;

    bookList.appendChild(row);

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
});

bookList.addEventListener("click", function (e) {

    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
    }

});//your JS code here. If required.
