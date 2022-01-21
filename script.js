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

function displaybooks() {
    myLibrary.forEach(function (elem) {
        console.table(elem);
    });

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
    displaybooks();
}
function displayform() {
    document.getElementById("addingform").style.visibility = "visible";
    document.getElementById("add").style.visibility = "hidden";
}
let add = document.querySelector("#add");
add.addEventListener("click", displayform);
let add2 = document.querySelector("#addingdone");
add2.addEventListener("click", addBookToLibrary);