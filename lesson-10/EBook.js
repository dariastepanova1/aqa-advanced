import Book from "./Book.js";

class EBook extends Book {
  constructor(title, author, publicationDate, fileFormat) {
    super(title, author, publicationDate);
    this._fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    if (typeof value !== "string" || value.trim() === "") {
      console.error("File format must be a non-empty string.");
      return;
    }
    this._fileFormat = value;
  }

    printInfo() {
    console.log(`Book title is ${this._title} and it's written by ${this._author} , published in ${this._publicationDate} with format ${this._fileFormat}.`);
  }

  static returnNewEbook(book, fileFormat) {
    return new EBook(book.title, book.author, book.publicationDate, fileFormat);
  }
}

export default EBook;