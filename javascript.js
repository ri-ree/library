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
    this.button = function() {
        this.read = "read";
    };
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
        /*this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;*/
    };
};

const myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.unshift(newBook);
};

submitButton.addEventListener("click", submitClick, false);

function submitClick(event) {

    event.preventDefault();

    let formTitle = document.getElementById('title').value;
    let formAuthor = document.getElementById('author').value;
    let formPages = document.querySelector('#pages').value;
    let formRead = document.querySelector('#read').value;

    addBookToLibrary(formTitle, formAuthor, formPages, formRead);

    let bookDisplay = document.createElement('div');
    bookDisplay.style.background = "rgb(209, 176, 187)";
    bookDisplay.style.padding = "10px";

    let readButtonDiv = document.createElement('div');
    let readButton = document.createElement('button');
    readButton.textContent = 'Read';
    readButtonDiv.appendChild(readButton);

    let buttonDiv = document.createElement('div');
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    buttonDiv.appendChild(deleteButton);

    let buttonsDiv = document.createElement('div');
    buttonsDiv.appendChild(readButtonDiv);
    buttonsDiv.appendChild(buttonDiv);
    bookDisplay.appendChild(buttonsDiv);

    deleteButton.addEventListener("click", () => {
        /*bookDisplay.remove();*/
        if (bookDisplay.parentNode) {
            bookDisplay.parentNode.removeChild(bookDisplay);
        };
    });

    let displayDiv = document.createElement('div');

    let currentObj = myLibrary[0];

    readButton.addEventListener("click", () => {
        currentObj.button();
        displayDiv.textContent = currentObj.info();
    });


    displayDiv.textContent = myLibrary[0].info();

    bookDisplay.appendChild(displayDiv);

    container.appendChild(bookDisplay);
};

btn.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
});