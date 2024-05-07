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

function addBookToLibrary(newBook, title, author, pages, read) {
    newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);
};

console.log(myLibrary);

addBookToLibrary("One Day", "David Nichols", "448", "not read year");

console.log(myLibrary);