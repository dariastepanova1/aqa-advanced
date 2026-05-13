import Book from "./Book.js";
import EBook from "./EBook.js";


// Instances of Book
const book1 = new Book("Book1", "author1", 2000);
book1.printInfo();

const book2 = new Book("Book2", "author2", 2018);
book2.printInfo();

// Instance of EBook
const ebook1 = new EBook("ebook title", "ebook author", 2025, ".pub");
ebook1.printInfo();


// Testing getters and setters
console.log(book1.title);
book1.title = "New Book Title";
console.log(book1.title);

console.log(book1.author);
book1.author = "New Author";
console.log(book1.author);

console.log(book1.publicationDate);
book1.publicationDate = 2022;
console.log(book1.publicationDate);

console.log(ebook1.fileFormat);
ebook1.fileFormat = ".pdf";
console.log(ebook1.fileFormat);

// Testing static method findOldestBook
console.log(Book.findOldestBook([book1, book2, ebook1]));

// Testing static method returnNewEbook
const newEbook = EBook.returnNewEbook(book1, ".mobi");
newEbook.printInfo();