const newBook = {
  title: "java",
  page: 360,
  price: 32000,
  author: "ddd",
  published: "1111",
  question: function () {
    console.log(`${this.author}의 신간도서`);
  },
};

function Book(title, page, price, author, published) {
  this.title = title;
  this.page = page;
  this.price = price;
  this.author = author;
  this.published = published;
  this.question = function () {
    console.log(`${this.author}신간도서`);
  };
}

const book1 = new Book("java", 360, 32000, "ddd", "252525");

console.log(book1);
console.log(book1.question());
