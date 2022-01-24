let myLibrary = [];
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return title + " " + author + " " + pages + " " + read;
    }
}
function appendCardDiv(title, author, pages, read) {
    let div = document.getElementById("cards");
    let newcard = document.createElement("div");
    newcard.innerHTML = title + "<br><br>" + author + "<br><br>" + pages + "<br><br>" + read;
    newcard.classList.add("card");
    div.appendChild(newcard);
}
function clearInputForms() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.querySelector("input[name = readstatus]:checked").checked = false;
}
function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.querySelector("input[name = readstatus]:checked").value;
    let newbook = new Book(title, author, pages, read);
    myLibrary.push(newbook);
    document.getElementById("addingform").style.visibility = "hidden";
    document.getElementById("add").style.visibility = "visible";
    appendCardDiv(title, author, pages, read);
    clearInputForms();
}
function displayform() {
    document.getElementById("addingform").style.visibility = "visible";
    document.getElementById("add").style.visibility = "hidden";
}
let add = document.querySelector("#add");
add.addEventListener("click", displayform);
let add2 = document.querySelector("#addingdone");
add2.addEventListener("click", addBookToLibrary);