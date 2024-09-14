// Class Book
class Book {
    constructor(title, author, isbn, available = true) {
        this.title = title;
        this.author = author;
        let _isbn = isbn; 
        this.available = available;

       
        this.getIsbn = function() {
            return _isbn;
        };

        this.setIsbn = function(value) {
            console.log("ISBN cannot be modified directly.");
        };
    }

    // Borrow a book
    borrowBook() {
        if (this.available) {
            this.available = false;
            console.log(`You have successfully borrowed '${this.title}'.`);
        } else {
            console.log(`Sorry, '${this.title}' is currently not available.`);
        }
    }

    // Return a book
    returnBook() {
        this.available = true;
        console.log(`You have successfully returned '${this.title}'.`);
    }
}

class Library {
    constructor() {
        this.books = [];
    }

  
    addBook(book) {
        this.books.push(book);
        console.log(`Book '${book.title}' added to the library.`);
    }

    // Remove a book from the library by ISBN
    removeBook(isbn) {
        const index = this.books.findIndex(book => book.getIsbn() === isbn);
        if (index !== -1) {
            const removedBook = this.books.splice(index, 1)[0];
            console.log(`Book '${removedBook.title}' removed from the library.`);
        } else {
            console.log(`No book found with ISBN: ${isbn}.`);
        }
    }

    // Find a book by title
    findBookByTitle(title) {
        const book = this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
        if (book) {
            return `Title: ${book.title}, Author: ${book.author}, ISBN: ${book.getIsbn()}, Available: ${book.available}`;
        } else {
            return "Book not found.";
        }
    }
}

// Class DigitalLibrary that inherits from Library
class DigitalLibrary extends Library {
    constructor() {
        super();
    }

    // Download a book if available
    downloadBook(isbn) {
        const book = this.books.find(book => book.getIsbn() === isbn);
        if (book) {
            if (book.available) {
                console.log(`'${book.title}' is available for download.`);
            } else {
                console.log(`'${book.title}' is not available for download.`);
            }
        } else {
            console.log(`No book found with ISBN: ${isbn}.`);
        }
    }
}





// Create some book objects
const book1 = new Book("Think Javascript", "Uweoma", "123499");
const book2 = new Book("NodeJS Fundamentals", "Adewale", "991234");

// Create a library instance
const library = new Library();

// Add books to the library
library.addBook(book1);
library.addBook(book2);

// Find a book by title
console.log(library.findBookByTitle("NodeJS Fundamentals"));

// Borrow a book
book1.borrowBook();

// Try to borrow the same book again
book1.borrowBook();

// Return the book
book1.returnBook();

// Remove a book by ISBN
library.removeBook("991234");

// Create a digital library instance
const digitalLibrary = new DigitalLibrary();

// Add books to the digital library
digitalLibrary.addBook(book1);

// Download a book
digitalLibrary.downloadBook("123499");
