const container = document.querySelector('#books');
const btn = document.querySelector('#btn');
const dialog = document.querySelector('dialog');
const closeButton = document.querySelector('dialog button');
const formTitle = document.querySelector('#title');
const formAuthor = document.querySelector('#author');
const formPages = document.querySelector('#pages');
const formRead = document.querySelector('#read');

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

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295", "not read yet");
myLibrary.push(theHobbit);

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
};

addBookToLibrary("One Day", "David Nichols", "448", "not read yet");

addBookToLibrary("Tomie", "Junji Ito", "752", "not read yet");

addBookToLibrary("Ill Wind", "Rachel Caine", "352", "read");

addBookToLibrary("The Lord of The Rings", "J.R.R Tolkien", "1216", "not read yet");

for (const obj of myLibrary) {
    let bookDisplay = document.createElement('div');
    bookDisplay.textContent = obj.info();
    bookDisplay.style.background = "rgb(209, 176, 187)";
    bookDisplay.style.padding = "10px";
    container.appendChild(bookDisplay);
};

btn.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});