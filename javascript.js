const container = document.querySelector('#books');

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

for (const obj of myLibrary) {
    let bookDisplay = document.createElement('div');
    bookDisplay.textContent = obj.info();
    bookDisplay.style.background = "rgb(209, 176, 187)";
    container.appendChild(bookDisplay);
};