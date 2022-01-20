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
    let read = document.getElementById("read").value;
    let newbook = new Book(title, author, pages, read);
    myLibrary.push(newbook);
    displaybooks();
}
let add = document.querySelector("#add");
add.addEventListener("click", addBookToLibrary);