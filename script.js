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


function appendCardDiv() {
    let div = document.getElementById("cards");
    let newcard = document.createElement("div");
    let i = 0;
    for (i; i < myLibrary.length; i++) {
        newcard.innerHTML = "<div id = 'titlei'>" + myLibrary[i].title + "</div><hr id = 'hr1'><div id = 'authori'>By " + myLibrary[i].author + "</div><br><br>" + myLibrary[i].read + "<br><br><div id = 'pagesi'> Pages: " + myLibrary[i].pages + "</div>";
        newcard.classList.add("card");
        div.appendChild(newcard);
    }

}

function clearInputForms() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.querySelector("input[name = readstatus]:checked").checked = false;
}
function clearAll() {
    let div = document.getElementById("cards");
    while (div.firstChild) {
        div.firstChild.remove();
    }

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
    //clearInputForms();
}
function displayform() {
    document.getElementById("addingform").style.visibility = "visible";
    document.getElementById("add").style.visibility = "hidden";
}

let add = document.querySelector("#add");
add.addEventListener("click", displayform);
let add2 = document.querySelector("#addingdone");
add2.addEventListener("click", addBookToLibrary);
let rem = document.querySelector("#remove");
rem.addEventListener("click", clearAll);

