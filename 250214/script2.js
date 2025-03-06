class Book {
  constructor(title, page, price, author, published) {
    this.title = title;
    this.page = page;
    this.price = price;
    this.author = author;
    this.published = published;
  }
  question() {
    console.log(`${this.author}신간도서`);
  }
}

const book1 = new Book("java", 360, 32000, "ddd", "252525");

console.log(book1);
book1.question();
