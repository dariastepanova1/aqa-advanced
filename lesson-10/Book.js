class Book {
  constructor(title, author, publicationDate) { 
    this._title = title;
    this._author = author;
    this._publicationDate = publicationDate;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== "string" || value.trim() === "") {
      console.error("Title must be a non-empty string.");
      return;
    }
      this._title = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (typeof value !== "string" || value.trim() === "") {
      console.error("Author must be a non-empty string.");
      return;
    }
    this._author = value;
  }

  get publicationDate() {
    return this._publicationDate;
  }

  set publicationDate(value) {
    if (!Number.isInteger(value) || value <= 0) {
      console.error("Publication date must be a valid integer.");
      return;
    }
    this._publicationDate = value;
  }
  
  printInfo() {
    console.log(`Book title is ${this._title} and it's written by ${this._author} , published in ${this._publicationDate}.`);
  }

  static findOldestBook(books) {
    if (!Array.isArray(books) || books.length === 0) {
      return null;
    }
    return books.reduce((oldest, current) => {
      return current.publicationDate < oldest.publicationDate ? current : oldest;
    });
  }
  
}

export default Book;