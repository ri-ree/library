const container = document.querySelector('#books');
const btn = document.querySelector('#btn');
const dialog = document.querySelector('dialog');
const closeButton = document.querySelector('dialog button');
const submitButton = document.querySelector('#submitButton');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
        /*this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;*/
    }
};

const myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.unshift(newBook);
};

submitButton.addEventListener("click", submitClick, false);

/*function addedBook() {
    for (const obj of myLibrary) {
        let bookDisplay = document.createElement('div');
        bookDisplay.textContent = obj.info();
        bookDisplay.style.background = "rgb(209, 176, 187)";
        bookDisplay.style.padding = "10px";
        container.appendChild(bookDisplay);
    };
}*/

function submitClick(event) {

    event.preventDefault();

    let formTitle = document.getElementById('title').value;
    let formAuthor = document.getElementById('author').value;
    let formPages = document.querySelector('#pages').value;
    let formRead = document.querySelector('#read').value;

    addBookToLibrary(formTitle, formAuthor, formPages, formRead);

    let bookDisplay = document.createElement('div');
        bookDisplay.textContent = myLibrary[0].info();
        bookDisplay.style.background = "rgb(209, 176, 187)";
        bookDisplay.style.padding = "10px";

    container.appendChild(bookDisplay);
    /*addedBook();*/
};


/*for (const obj of myLibrary) {
    let bookDisplay = document.createElement('div');
    bookDisplay.textContent = obj.info();
    bookDisplay.style.background = "rgb(209, 176, 187)";
    bookDisplay.style.padding = "10px";
    container.appendChild(bookDisplay);
    console.log(obj);
};*/

btn.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
});